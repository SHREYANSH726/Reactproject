import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import RecipeList from "./components/RecipeList"
import RecipeForm from "./components/RecipeForm"
import RecipeDetails from "./components/RecipeDetails"
import PrivateRoute from "./components/PrivateRoute"
import BookOrder from "./components/BookOrder"

const App = () => {
  return (
    <div className="min-vh-100 bg-light">
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<RecipeList />} />
          <Route
            path="/add"
            element={
              <PrivateRoute>
                <RecipeForm />
              </PrivateRoute>
            }
          />
          <Route path="/edit/:id" element={<RecipeForm />} />
          <Route path="/details/:id" element={<RecipeDetails />} />
          <Route
            path="*"
            element={
              <div className="text-center py-5">
                <h2>Page Not Found</h2>
                <p>The page you're looking for doesn't exist.</p>
              </div>
            }
            
          />
          <Route path="/order" element={<BookOrder />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
