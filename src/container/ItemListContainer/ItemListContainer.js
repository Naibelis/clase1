import "./ItemListContainer.css";
import ItemCount from "../../components/ItemCount/ItemCount";
import { useEffect, useState } from "react";

function ItemListContainer({ greeting }) {
  const [compro, setCompro] = useState(false);
  const [total, setTotal] = useState(0);

  const onAdd = (count) => {
    setTotal(count);
  };

  useEffect(() => {
    setCompro(true);
  }, [total]);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="saludo">{greeting}</h1>
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
            {compro ? <p>Se ha comprado la cantidad de: {total}</p> : <></>}
          </div>
        </div>
      </div>
    </>
  );
}
export default ItemListContainer;
