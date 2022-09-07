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
              <Nav.Link href="#">PRODUCT</Nav.Link>
              <Nav.Link href="#">SOLUTIONS</Nav.Link>
              <Nav.Link href="#">SERVICES</Nav.Link>
              <Nav.Link href="#">LEARN</Nav.Link>
              <Nav.Link href="#">COMPANY</Nav.Link>
              <Nav.Link href="#">EN</Nav.Link>
              <Button variant="success">Trial</Button>{" "}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
