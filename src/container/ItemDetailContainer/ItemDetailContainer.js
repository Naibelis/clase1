import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mock } from "../../components/helpers/mock";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const { detalleId } = useParams();

  useEffect(() => {
    mock
      .then((resp) => {
        const res = resp.filter((p) => p.id === detalleId)[0];
        setItem(res);
      })
      .finally(() => setLoading(false));
  }, []);

  return <>{loading ? <h2>Cargando...</h2> : <ItemDetail item={item} />}</>;
}

export default ItemDetailContainer;
