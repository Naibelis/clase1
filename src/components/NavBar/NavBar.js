import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartWidget from "../CartWidget/CartWidget";
import logo from '../../dog-logo-illustration-free-vector.jpeg';
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img alt="logo" src={logo} width="30" height="30" className="d-inline-block align-top" /> Educación positiva
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/">Inicio</Link>
              <NavDropdown menuVariant="dark" title="Categorias" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to='/categoria/curso'>Cursos</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to='/categoria/actividad'>Actividades</Link></NavDropdown.Item>
                <NavDropdown.Item><Link to='/categoria/accesorio'>Accesorios</Link></NavDropdown.Item>
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
