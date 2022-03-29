import "./ItemListContainer.css";
import ItemCount from "../../components/ItemCount/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { mock } from "../../components/helpers/mock";

function ItemListContainer({ greeting }) {
  const [compro, setCompro] = useState(false);
  const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const onAdd = (count) => {
    setTotal(count);
  };

  useEffect(() => {
    mock.then((resp) => setItems(resp)).finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    setCompro(true);
  }, [total]);

  return (
    <>
      <h1 className="saludo">{greeting}</h1>
      <ItemCount stock={5} initial={1} onAdd={onAdd} />
      {compro ? <p>Se ha comprado la cantidad de: {total}</p> : <></>}
      {loading ? <h2>Cargando...</h2> : <ItemList items={items} />}
    </>
  );
}
export default ItemListContainer;
