import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

function ItemDetail({ item }) {
  const { addToCart } = useCartContext();

  const [total, setTotal] = useState(0);
  const [stock, setStock] = useState(item.stock);
  const [show, setShow] = useState(true);

  const onAdd = (count) => {
    if (stock >= count) {
      addToCart(item, count);
      setTotal(count);
      setShow(false);
    } else {
      console.log(`No hay stock!`);
    }
  };

  useEffect(() => {
    console.log(`Se han agregado ${total} unidades del item id: ${item.id}`);
    setStock(stock - total);
  }, [total])

  return (
    <>
      {!item ? (
        <h1>Producto no existe</h1>
      ) : (
        <Container className="text-center my-3">
          <Row className="justify-content-center">
            <Col md={8} lg={5}>
              <Card>
                <Card.Header>
                  <h1>{item.title}</h1>
                </Card.Header>
                <Card.Body>
                  <img src={item.pictureUrl} alt={item.title} width={200} />
                  <p><b>Id:</b> {item.id}</p>
                  <p><b>Descripcion:</b> {item.description}</p>
                  <p><b>Precio:</b> {item.price}</p>
                  <p><b>Stock:</b> {stock}</p>
                  <p><b>Categoria:</b> {item.category}</p>
                </Card.Body>
                <Card.Footer>
                  {show ? <ItemCount max={5} initial={1} onAdd={onAdd} /> : <Link to='/cart'><Button variant="success">Ir al carrito</Button></Link>}
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}

export default ItemDetail;
