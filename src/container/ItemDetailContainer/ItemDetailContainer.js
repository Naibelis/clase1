import { useEffect, useState } from "react";
import { mock } from "../../components/helpers/mock";
import ItemDetail from "../../components/ItemDetail/ItemDetail";

function ItemDetailContainer() {
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    mock.then((resp) => setItem(resp[0])).finally(() => setLoading(false));
  }, []);

  return <>{loading ? <h1>Cargando...</h1> : <ItemDetail item={item} />}</>;
}

export default ItemDetailContainer;
