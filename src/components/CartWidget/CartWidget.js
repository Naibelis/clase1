import carrito from "../../shopping_cart_black_24dp.svg";
import "./CartWidget.css";

function CartWidget({ variant }) {
  return (
    <div>
      <img className={variant} alt="carrito" src={carrito} />
    </div>
  );
}
export default CartWidget;
