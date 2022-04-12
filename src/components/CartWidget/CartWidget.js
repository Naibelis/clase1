import { useEffect, useState } from "react";
import { Badge, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import carrito from "../../shopping_cart_black_24dp.svg";
import "./CartWidget.css";

function CartWidget({ variant }) {
  const { cartItems } = useCartContext();
  const [count, setCount] = useState();
  useEffect(() => {
    let count = 0
    cartItems.forEach(e => {
      count += e.quantity
    });
    setCount(count)
  }, [cartItems]);

  return (
    <Nav className="me-auto">
      <Link to="/cart">
        <img className={variant} alt="carrito" src={carrito} />
      </Link>
      {cartItems.length > 0 && <Badge bg="danger">{count}</Badge>}
    </Nav>);
}

export default CartWidget;
