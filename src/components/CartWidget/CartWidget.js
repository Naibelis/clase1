import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import carrito from "../../shopping_cart_black_24dp.svg";
import "./CartWidget.css";

function CartWidget({ variant }) {
  return (
    <Nav className="me-auto">
      <Link to="/cart">
        <img className={variant} alt="carrito" src={carrito} />
      </Link>
    </Nav>);
}

export default CartWidget;
