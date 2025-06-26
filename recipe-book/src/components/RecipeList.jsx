import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import axios from "axios"
import { setRecipes } from "../redux/actions/recipeActions"
import { Link } from "react-router-dom"

const RecipeList = () => {
  const dispatch = useDispatch()
  const { recipes } = useSelector((state) => state)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterCategory, setFilterCategory] = useState("")

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        setLoading(true)
        const response = await axios.get("http://localhost:3000/recipes")
        dispatch(setRecipes(response.data))
        setError(null)
      } catch (err) {
        setError("Failed to fetch recipes. Make sure the server is running.")
        console.error("Error fetching recipes:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchRecipes()
  }, [dispatch])

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch =
      recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      recipe.ingredients.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = filterCategory === "" || recipe.category === filterCategory
    return matchesSearch && matchesCategory
  })

  const categories = [...new Set(recipes.map((recipe) => recipe.category))]

  return (
    <div
      className="min-vh-100 py-5 px-3"
      style={{
        background: "linear-gradient(to right, #ffecd2, #fcb69f)",
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
          <h1 className="fw-bold text-dark">🍽️ Recipe Collection</h1>
          <Link to="/add" className="btn btn-success shadow">
            <i className="fas fa-plus me-2"></i>Add New Recipe
          </Link>
        </div>

        {/* Search and Filter */}
        <div className="row mb-4">
          <div className="col-md-8 mb-2">
            <div className="input-group shadow-sm">
              <span className="input-group-text bg-white">
                <i className="fas fa-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="Search recipes by title or ingredients..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-4">
            <select
              className="form-select shadow-sm"
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
            >
              <option value="">All Categories</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status"></div>
            <p className="text-muted mt-3">Loading recipes...</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="alert alert-danger" role="alert">
            <i className="fas fa-exclamation-triangle me-2"></i>
            {error}
          </div>
        )}

        {/* Recipe Cards */}
        {!loading && !error && (
          <>
            {filteredRecipes.length === 0 ? (
              <div className="text-center py-5">
                <i className="fas fa-utensils fa-3x text-muted mb-3"></i>
                <h3 className="text-muted">No recipes found</h3>
                <p className="text-muted">
                  {recipes.length === 0
                    ? "Start by adding your first recipe!"
                    : "Try changing your search or category filter."}
                </p>
              </div>
            ) : (
              <div className="row">
                {filteredRecipes.map((recipe) => (
                  <div className="col-md-4 mb-4" key={recipe.id}>
                    <div className="card h-100 border-0 shadow-lg recipe-card">
                      <div className="card-body d-flex flex-column">
                        <h5 className="card-title fw-bold text-primary">{recipe.title}</h5>
                        <span className="badge bg-dark-subtle text-dark mb-2 align-self-start">
                          {recipe.category}
                        </span>
                        <p className="card-text text-muted flex-grow-1">
                          <strong>Ingredients:</strong>{" "}
                          {recipe.ingredients.length > 100
                            ? recipe.ingredients.substring(0, 100) + "..."
                            : recipe.ingredients}
                        </p>
                        <div className="mt-auto">
                          <Link to={`/details/${recipe.id}`} className="btn btn-outline-primary w-100">
                            <i className="fas fa-eye me-2"></i>View Details
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default RecipeList
