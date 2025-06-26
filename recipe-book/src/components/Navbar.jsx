import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-3">
      <div className="container">
        <Link className="navbar-brand d-flex align-items-center gap-2 fs-4 fw-bold" to="/">
          <i className="fas fa-utensils"></i> Recipe Book
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <div className="navbar-nav gap-2">
            <Link className="nav-link text-white fw-semibold" to="/">
              <i className="fas fa-home me-1"></i> Home
            </Link>
            <Link className="nav-link text-white fw-semibold" to="/add">
              <i className="fas fa-plus me-1"></i> Add Recipe
            </Link>
            <Link className="nav-link" to="/order">
  <i className="fas fa-book me-1"></i>
  Book Order
</Link>

          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
