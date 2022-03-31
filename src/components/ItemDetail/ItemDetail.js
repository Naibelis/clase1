import { Container, Row } from "react-bootstrap";

function ItemDetail({ item }) {
  return (
    <>
      {!item ? (
        <h1>Producto no existe</h1>
      ) : (
        <Container className="text-center">
          <h1>{item.title}</h1>
          <p>Id: {item.id}</p>
          <p>Descripcion: {item.description}</p>
          <p>Precio: {item.price}</p>
          <p>Stock: {item.stock}</p>
          <p>Categoria: {item.category}</p>
          <img src={item.pictureUrl} alt={item.title} height={400} />
        </Container>
      )}
    </>
  );
}

export default ItemDetail;
