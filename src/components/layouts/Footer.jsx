
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer text-light py-3">
      <Container className='p-3'>
        <Row>
          <Col md={6}>
            <h5>About Us</h5>
            <p>Your go-to place for delicious burgers delivered straight to your door!</p>
          </Col>
          <Col md={3}>
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Order Now</a></li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>Contact Us</h5>
            <address>
              <p>123 Burger St</p>
              <p>City, State ZIP</p>
              <p>Phone: 123-456-7890</p>
            </address>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p>&copy; {new Date().getFullYear()} Burger Delivery</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
