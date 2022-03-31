import { Card, ListGroup, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemCount from "../../components/ItemCount/ItemCount";

function Item({ item }) {
  const [total, setTotal] = useState(0);

  const onAdd = (count) => {
    setTotal(count);
  };

  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Img variant="top" src={item.pictureUrl} height="200" width="auto" />
          <Card.Title style={{ textAlign: "center" }}>{item.title}</Card.Title>
          <Card.Text></Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Precio: ${item.price}</ListGroup.Item>
            <ListGroup.Item>Categoria: {item.category}</ListGroup.Item>
            <ListGroup.Item>
              <ItemCount stock={item.stock} initial={item.stock > 0 ? 1 : 0} onAdd={onAdd} />
            </ListGroup.Item>
          </ListGroup>
        </Card.Body>
        <Card.Footer className="text-center">
          <Button variant="success" href={"/detalle/" + item.id}>Ver detalle</Button>
        </Card.Footer>
      </Card>
    </>
  );
}

export default Item;
