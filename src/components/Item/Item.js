import { Card, ListGroup, Button } from "react-bootstrap";

function Item({ item }) {
  return (
    <>
      <Card style={{ width: "18rem" }} className="my-2">
        <Card.Body>
          <Card.Img variant="top" src={item.pictureUrl} height="200" width="auto" />
          <Card.Title style={{ textAlign: "center" }}>{item.title}</Card.Title>
          <Card.Text></Card.Text>
          <ListGroup variant="flush">
            <ListGroup.Item>Precio: ${item.price}</ListGroup.Item>
            <ListGroup.Item>Categoria: {item.category}</ListGroup.Item>
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
