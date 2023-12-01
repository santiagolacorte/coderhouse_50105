import React from "react";
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetComponent from '../CartWidgetComponent/CartWidgetComponent';
import ProductsData from "../../data/ProductsData.json";

const NavBarComponent = () => {
  const uniqueCategories = new Set(ProductsData.map(p => p.category));

  return (
    <Navbar bg="dark" expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand>
          <Link to={"/"} style={{textDecoration: "none", color: "black"}}>Naif Café</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Products</Nav.Link>
            <NavDropdown title="Category" id="basic-nav-dropdown">
              {[...uniqueCategories].map(category => (
                <NavDropdown.Item key={category}>
                  <Link to={`/category/${category}`} style={{ textDecoration: "none", color: "black" }}>
                    {category}
                  </Link>
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
          <CartWidgetComponent />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBarComponent;
