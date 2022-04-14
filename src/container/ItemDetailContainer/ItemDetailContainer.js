import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { detalleId } = useParams();

  useEffect(() => {
    const db = getFirestore();
    const q = doc(db, "items", detalleId);
    getDoc(q)
      .then((snapshot) => {
        setItem({ id: snapshot.id, ...snapshot.data() });
      })
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, [detalleId]);

  return <>{loading ? <h2>Cargando...</h2> : <ItemDetail item={item} />}</>;
}

export default ItemDetailContainer;
