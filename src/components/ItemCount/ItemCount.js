import { useState } from "react";
import { Button } from "react-bootstrap";

function ItemCount({ stock, initial, onAdd }) {
  const [count, setCount] = useState(initial);

  const modCount = (operation) => {
    if (operation === "resta" && count > 0) {
      setCount(count - 1);
    }
    if (operation === "suma" && count < stock) {
      setCount(count + 1);
    }
  };

  const fnOnAdd = () => {
    if (count <= stock) {
      onAdd(count);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-around my-2">
        <Button variant="primary" size="sm" onClick={() => modCount("resta")}>
          -
        </Button>
        <span className="mx-3">{count}</span>
        <Button variant="primary" size="sm" onClick={() => modCount("suma")}>
          +
        </Button>
      </div>
      <div className="d-flex justify-content-center">
        <Button variant="primary" size="sm" onClick={fnOnAdd}>
          Agregar al carrito
        </Button>
      </div>
    </>
  );
}

export default ItemCount;
