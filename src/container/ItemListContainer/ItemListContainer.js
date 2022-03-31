import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { mock } from "../../components/helpers/mock";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
  // const [compro, setCompro] = useState(false);
  // const [total, setTotal] = useState(0);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    mock
      .then((resp) => {
        let filter = resp.filter((p) => p.category === categoriaId);
        if (filter.length === 0) {
          filter = resp;
        }
        setItems(filter);
      })
      .finally(() => setLoading(false));
  }, []);

  // useEffect(() => {
  //   setCompro(true);
  // }, [total]);

  return (
    <Container>
      <h1 className="saludo text-center">{greeting}</h1>
      <br />
      {loading ? <h2>Cargando...</h2> : <ItemList items={items} />}
    </Container>
  );

  // {compro ? <p>Se ha comprado la cantidad de: {total}</p> : <></>}
}
export default ItemListContainer;
