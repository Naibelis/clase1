import { useState } from "react";
import { Button } from "react-bootstrap";

function ItemCount({ max, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const modCount = (operation) => {
    if (operation === "resta" && count > 0) {
      setCount(count - 1);
    }
    if (operation === "suma" && count < max) {
      setCount(count + 1);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center my-2">
        <Button variant="primary" size="sm" onClick={() => modCount("resta")}>
          -
        </Button>
        <span className="mx-4">{count}</span>
        <Button variant="primary" size="sm" onClick={() => modCount("suma")}>
          +
        </Button>
      </div>
      <div className="d-flex justify-content-center">
        <Button variant="primary" size="sm" onClick={(evt) => {
          onAdd(count);
          setCount(initial);
        }}>
          Agregar al carrito
        </Button>
      </div>
    </>
  );
}

export default ItemCount;
