import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import "./NavBar.css";

function NavBar() {
  return (
    <div className="sticky">
      <Navbar collapseOnSelect expand="lg" bg="light" text="dark">
        <Container>
          <div className="head">
            {/* <Navbar.Brand href="#">datapine</Navbar.Brand> */}
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Nav variant="dark">
              <Nav.Link href="#features">PRODUCT</Nav.Link>
              <Nav.Link href="#pricing">SOLUTIONS</Nav.Link>
              <Nav.Link href="#deets">SERVICES</Nav.Link>
              <Nav.Link href="#deets">LEARN</Nav.Link>
              <Nav.Link href="#deets">COMPANY</Nav.Link>
              <Nav.Link href="#deets">EN</Nav.Link>
              <Button variant="success">Trial</Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
