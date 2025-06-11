import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import productImage from './assets/myimg/shopping.webp'; // Replace with your actual path

const Product = () => {
  return (
    <div>
      <Container fluid className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <h1 className="text-center mb-4 animate__animated animate__fadeInDown">Product Page</h1>
          <p className="text-center text-muted mb-5 animate__animated animate__fadeIn">Here you can display the details of your product.</p>

          {/* Product Layout */}
          <Row className="align-items-center">
            {/* Product Image with Animation */}
            <Col md={6} className="animate__animated animate__fadeInLeft">
              <img
                src={productImage}
                alt="Product"
                className="img-fluid rounded shadow"
              />
            </Col>

            {/* Product Description with Animation */}
            <Col md={6} className="animate__animated animate__fadeInRight">
              <h2 className="mb-3">Smart Shopping Assistant</h2>
              <p className="text-muted">
                This is a great product that solves many problems. It is designed to make your life easier and more productive. With its innovative features, you’ll be able to accomplish tasks faster and more efficiently.
              </p>
              <p className="fs-5"><strong>Price: $99.99</strong></p>
              <button className="btn btn-primary btn-lg mt-3">Add to Cart</button>
            </Col>
          </Row>
        </Container>
      </Container>
    </div>
  );
};

export default Product;
