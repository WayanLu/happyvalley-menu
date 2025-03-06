import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

function CreateNavbar() {
  const location = useLocation();
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">Happy Valley Seafood Restaurant</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" active={location.pathname === "/"}>
              Home
            </Nav.Link>
          </Nav>
          {/* Work on admin page later, focus on styling menu*/}
          {/* <nav>
            <nav.link
              as={link}
              to="/admin"
              active={location.pathname === "/admin"}
            >
              admin
            </nav.link>
          </nav> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CreateNavbar;
