// components/BookOrder.jsx
import { useState } from "react"

const BookOrder = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    quantity: 1,
    notes: "",
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert("Your book order has been placed!")
    console.log(formData)
    // You can post to backend here (e.g., axios.post)
  }

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow border-0">
            <div className="card-header bg-success text-white">
              <h3 className="mb-0"><i className="fas fa-book me-2"></i>Order a Recipe Book</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Shipping Address</label>
                  <textarea
                    name="address"
                    className="form-control"
                    rows="3"
                    required
                    value={formData.address}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Quantity</label>
                  <input
                    type="number"
                    name="quantity"
                    className="form-control"
                    min="1"
                    value={formData.quantity}
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Additional Notes (optional)</label>
                  <textarea
                    name="notes"
                    className="form-control"
                    rows="2"
                    value={formData.notes}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-success w-100">
                  <i className="fas fa-check me-2"></i>Place Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookOrder
