import { Link } from "react-router-dom";
import "../../styles/HeaderStyle.css"
import {Container, Nav, Navbar} from 'react-bootstrap';
import { useState } from "react";

const Header = () => {
   
const [nav, setnav] = useState(false);

const changeValueOnScroll=()=>{
  const scrollValue = document?.documentElement?.scrollTop;
  scrollValue >100? setnav(true): setnav(false);
}
  
  window.addEventListener("scroll",changeValueOnScroll);
  
  
  return (
        <header>
           <Navbar collapseOnSelect expand="lg" className={`${nav===true ? "sticky" : ""}`}>
      <Container>
        <Navbar.Brand href="#home">
          <Link>
          <h2 className="logo">Burger</h2>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/menu">Our Menu</Nav.Link>
            <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/">
              <div className="cart">
              <i className="bi bi-bag"></i>
              <em className="roundpoint">2</em>

              </div>
            </Nav.Link>
     
          </Nav>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
        </header>
      );
}

export default Header