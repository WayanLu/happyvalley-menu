import { Navbar, Nav, Container } from "react-bootstrap";

function CreateNavbar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        {/* Navbar Brand */}
        <Navbar.Brand href="/home">My Site</Navbar.Brand>

        {/* Navbar Toggle for mobile */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Left-aligned nav items */}
          <Nav>
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/projects">Projects</Nav.Link>
          </Nav>

          {/* Right-aligned nav items */}
          <Nav className="ms-auto">
            <Nav.Link href="/profile">Profile</Nav.Link>
            <Nav.Link href="/logout">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CreateNavbar;
