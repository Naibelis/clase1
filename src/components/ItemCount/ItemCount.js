import { useState } from "react";

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

  return (
    <>
      <div className="d-flex justify-content-between my-2 w-25">
        <button className="btn btn-primary" onClick={() => modCount("resta")}>
          -
        </button>
        <span className="mx-3">{count}</span>
        <button className="btn btn-primary" onClick={() => modCount("suma")}>
          +
        </button>
      </div>
      <div className="d-flex w-25">
        <button className="btn btn-outline-success" onClick={onAdd(count)}>Agregar al carrito</button>
      </div>
    </>
  );
}

export default ItemCount;
