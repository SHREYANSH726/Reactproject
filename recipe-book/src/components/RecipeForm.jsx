"use client"

import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import { addRecipe, updateRecipe } from "../redux/actions/recipeActions"
import { useNavigate, useParams } from "react-router-dom"

const RecipeForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    ingredients: "",
    category: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const isEditing = Boolean(id)

  const categories = ["Italian", "Asian", "Dessert", "American", "Mexican", "Indian", "Other"]

  useEffect(() => {
    if (isEditing) {
      const fetchRecipe = async () => {
        try {
          setLoading(true)
          const response = await axios.get(`http://localhost:3000/recipes/${id}`)
          setFormData({
            title: response.data.title || "",
            ingredients: response.data.ingredients || "",
            category: response.data.category || "",
          })
          setError(null)
        } catch (err) {
          setError("Failed to fetch recipe details.")
          console.error("Error fetching recipe:", err)
        } finally {
          setLoading(false)
        }
      }
      fetchRecipe()
    }
  }, [id, isEditing])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!formData.title.trim() || !formData.ingredients.trim() || !formData.category) {
      setError("Please fill in all fields.")
      return
    }

    try {
      setLoading(true)
      setError(null)

      if (isEditing) {
        const response = await axios.put(`http://localhost:3000/recipes/${id}`, {
          ...formData,
          id: Number.parseInt(id),
        })
        dispatch(updateRecipe(response.data))
      } else {
        const response = await axios.post("http://localhost:3000/recipes", formData)
        dispatch(addRecipe(response.data))
      }

      navigate("/")
    } catch (err) {
      setError(`Failed to ${isEditing ? "update" : "add"} recipe. Please try again.`)
      console.error("Error saving recipe:", err)
    } finally {
      setLoading(false)
    }
  }

  const handleCancel = () => {
    navigate("/")
  }

  if (loading && isEditing) {
    return (
      <div className="text-center">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card shadow">
          <div className="card-header">
            <h2 className="mb-0">
              <i className={`fas ${isEditing ? "fa-edit" : "fa-plus"} me-2`}></i>
              {isEditing ? "Edit Recipe" : "Add New Recipe"}
            </h2>
          </div>
          <div className="card-body">
            {error && (
              <div className="alert alert-danger" role="alert">
                <i className="fas fa-exclamation-triangle me-2"></i>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="title" className="form-label">
                  <i className="fas fa-utensils me-2"></i>
                  Recipe Title *
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter recipe title"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="category" className="form-label">
                  <i className="fas fa-tags me-2"></i>
                  Category *
                </label>
                <select
                  className="form-select"
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select a category</option>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label htmlFor="ingredients" className="form-label">
                  <i className="fas fa-list me-2"></i>
                  Ingredients *
                </label>
                <textarea
                  className="form-control"
                  id="ingredients"
                  name="ingredients"
                  rows="5"
                  value={formData.ingredients}
                  onChange={handleInputChange}
                  placeholder="List the ingredients (e.g., 2 cups flour, 1 tsp salt, etc.)"
                  required
                ></textarea>
                <div className="form-text">Separate ingredients with commas for better readability.</div>
              </div>

              <div className="d-flex gap-2">
                <button type="submit" className="btn btn-success" disabled={loading}>
                  {loading ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status"></span>
                      {isEditing ? "Updating..." : "Adding..."}
                    </>
                  ) : (
                    <>
                      <i className={`fas ${isEditing ? "fa-save" : "fa-plus"} me-2`}></i>
                      {isEditing ? "Update Recipe" : "Add Recipe"}
                    </>
                  )}
                </button>
                <button type="button" className="btn btn-secondary" onClick={handleCancel} disabled={loading}>
                  <i className="fas fa-times me-2"></i>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecipeForm
