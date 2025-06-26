import { Navigate } from "react-router-dom"

const PrivateRoute = ({ children }) => {
  // For now, we'll always allow access
  // In a real app, you would check authentication status here
  const isAuthenticated = true

  // Example of how you might check authentication:
  // const isAuthenticated = localStorage.getItem('authToken') !== null;
  // const isAuthenticated = useSelector(state => state.auth.isLoggedIn);

  return isAuthenticated ? children : <Navigate to="/login" replace />
}

export default PrivateRoute
