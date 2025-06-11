import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function Cards() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        {[{
          img: "https://www.apella.in/cdn/shop/files/RustCrustWoollenShirt_2.jpg?v=1701668621&width=1946",
          title: "Rust Woollen Shirt",
          price: "₹1200"
        }, {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvw9x77xaZQEsrPVy7cZwHf82we7jMlU52oQ&s",
          title: "Casual Denim Shirt",
          price: "₹1300"
        }, {
          img: "https://imagescdn.allensolly.com/img/app/product/3/39733188-15330013.jpg?auto=format&w=390",
          title: "Formal Blue Shirt",
          price: "₹900"
        }].map((item, index) => (
          <Col key={index} md={4} className="d-flex justify-content-center mb-4">
            <Card style={{ width: '18rem', borderRadius: '12px', boxShadow: '0 8px 20px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease' }} className="hover-card">
              <Card.Img
                variant="top"
                src={item.img}
                alt={item.title}
                style={{ height: '250px', objectFit: 'cover', borderTopLeftRadius: '12px', borderTopRightRadius: '12px' }}
              />
              <Card.Body className="text-center">
                <Card.Title style={{ fontSize: '1.1rem', fontWeight: '600' }}>{item.title}</Card.Title>
                <Card.Text style={{ color: '#333', marginBottom: '12px' }}>
                  <strong style={{ color: '#007bff' }}>{item.price}</strong>
                </Card.Text>
                <Button variant="outline-primary" style={{ borderRadius: '20px', padding: '5px 20px' }}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {/* Optional: Add a small CSS style for hover effect */}
      <style>{`
        .hover-card:hover {
          transform: translateY(-5px);
        }
      `}</style>
    </Container>
  );
}

export default Cards;
