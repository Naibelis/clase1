import { Nav } from "react-bootstrap";
import carrito from "../../shopping_cart_black_24dp.svg";
import "./CartWidget.css";

function CartWidget({ variant }) {
  return (
    <Nav className="me-auto">
      <Nav.Link href="/cart">
        <img className={variant} alt="carrito" src={carrito} />
      </Nav.Link>
    </Nav>);
}

export default CartWidget;
