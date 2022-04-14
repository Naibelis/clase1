import "./ItemListContainer.css";
import { useEffect, useState } from "react";
import ItemList from "../../components/ItemList/ItemList";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoriaId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    let q;
    if (categoriaId) {
      q = query(collection(db, "items"), where("category", "==", categoriaId));
    } else {
      q = query(collection(db, "items"));
    }
    getDocs(q)
      .then((snapshot) => {
        setItems(snapshot.docs.map(d => ({ id: d.id, ...d.data() })));
      })
      .catch(err => console.log(err))
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
