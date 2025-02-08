import { Navbar, Nav, Container } from "react-bootstrap";

function CreateNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Navbar Brand */}
        <Navbar.Brand href="/home">
          Happy Valley Seafood Restaurant
        </Navbar.Brand>

        {/* Navbar Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left-aligned nav items */}
          <Nav>
            <Nav.Link href="/home">Menu</Nav.Link>
          </Nav>

          {/* Right-aligned nav items */}
          <Nav className="ms-auto">
            <Nav.Link href="/logout">Admin</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CreateNavbar;
