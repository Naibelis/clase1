import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import logo from '../../dog-logo-illustration-free-vector.jpeg';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img alt="logo" src={logo} width="30" height="30" className="d-inline-block align-top" /> Educación positiva
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Inicio</Nav.Link>
              <NavDropdown menuVariant="dark" title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item href="/categoria/curso">Cursos</NavDropdown.Item>
                <NavDropdown.Item href="/categoria/actividad">Actividades</NavDropdown.Item>
                <NavDropdown.Item href="/categoria/accesorio">Accesorios</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <CartWidget variant="light" />
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
