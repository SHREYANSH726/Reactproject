import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import axios from "axios"
import { deleteRecipe } from "../redux/actions/recipeActions"

const RecipeDetails = () => {
  const { id } = useParams()
  const { recipes } = useSelector((state) => state)
  const [recipe, setRecipe] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [showDeleteModal, setShowDeleteModal] = useState(false)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        setLoading(true)
        const storeRecipe = recipes.find((r) => r.id === Number.parseInt(id))
        if (storeRecipe) {
          setRecipe(storeRecipe)
        } else {
          const response = await axios.get(`http://localhost:3000/recipes/${id}`)
          setRecipe(response.data)
        }
        setError(null)
      } catch (err) {
        setError("Recipe not found or failed to load.")
        console.error("Error fetching recipe:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipe()
  }, [id, recipes])

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3000/recipes/${id}`)
      dispatch(deleteRecipe(Number.parseInt(id)))
      navigate("/")
    } catch (err) {
      setError("Failed to delete recipe. Please try again.")
      console.error("Error deleting recipe:", err)
    }
    setShowDeleteModal(false)
  }

  if (loading) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary" role="status" />
        <p className="mt-3 text-muted">Loading recipe...</p>
      </div>
    )
  }

  if (error || !recipe) {
    return (
      <div className="text-center my-5">
        <div className="alert alert-danger">
          <i className="fas fa-exclamation-circle me-2"></i>
          {error || "Recipe not found"}
        </div>
        <Link to="/" className="btn btn-outline-primary">
          <i className="fas fa-arrow-left me-2"></i>
          Back to Recipes
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-4">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card border-0 shadow rounded">
            <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
              <h3 className="mb-0">{recipe.title}</h3>
              <span className="badge bg-light text-dark text-uppercase">{recipe.category}</span>
            </div>

            <div className="card-body">
              <section className="mb-4">
                <h5 className="text-muted mb-3">
                  <i className="fas fa-utensils me-2"></i>Ingredients
                </h5>
                <div className="bg-light p-3 rounded border">
                  <p className="mb-0" style={{ whiteSpace: "pre-line" }}>{recipe.ingredients}</p>
                </div>
              </section>

              <div className="d-flex flex-wrap gap-3">
                <Link to={`/edit/${recipe.id}`} className="btn btn-outline-warning">
                  <i className="fas fa-edit me-2"></i>Edit
                </Link>
                <button onClick={() => setShowDeleteModal(true)} className="btn btn-outline-danger">
                  <i className="fas fa-trash me-2"></i>Delete
                </button>
                <Link to="/" className="btn btn-outline-secondary">
                  <i className="fas fa-arrow-left me-2"></i>Back
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="modal fade show d-block" style={{ backgroundColor: "rgba(0,0,0,0.6)" }}>
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirm Deletion</h5>
                <button type="button" className="btn-close" onClick={() => setShowDeleteModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>
                  Are you sure you want to delete <strong>{recipe.title}</strong>?
                </p>
                <p className="text-danger small mb-0">This action cannot be undone.</p>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowDeleteModal(false)}>
                  Cancel
                </button>
                <button className="btn btn-danger" onClick={handleDelete}>
                  <i className="fas fa-trash me-2"></i>Confirm Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default RecipeDetails
