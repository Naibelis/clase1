import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { mock } from "../../components/helpers/mock";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";

function ItemListContainer({ greeting }) {
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
  }, [categoriaId]);

  return (
    <Container className="my-3">
      <h1 className="saludo text-center">{greeting}</h1>
      <br />
      {loading ? <h2>Cargando...</h2> : <ItemList items={items} />}
    </Container>
  );
}
export default ItemListContainer;
