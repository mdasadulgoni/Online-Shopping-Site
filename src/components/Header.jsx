import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-navbar-color" variant='dark'>
      <Container>
        <Navbar.Brand as={NavLink} to="/">Shop Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">

          <Nav className="m-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about">About</Nav.Link>
            <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Branded Phones</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Smart TV
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Laptot</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                More
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/contect">ContactUs</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/cart">Cart( 40 )</Nav.Link>
            <Nav.Link href="#deets">LogIn</Nav.Link>
            <Nav.Link href="#deets">SignUp</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
