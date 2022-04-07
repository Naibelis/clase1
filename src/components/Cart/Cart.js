import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useCartContext } from "../../context/CartContext";

function Cart() {
    const { cartItems, clear, removeFromCart } = useCartContext();
    cartItems.map((cartItem) => console.log(cartItem));
    return <>
        <Container className="my-3">
            <Row className="justify-content-center">
                <Col md={10}>
                    <h1>Carrito</h1>
                    {cartItems.map((cartItem) =>
                    (<ListGroup>
                        <ListGroupItem>
                            <p>{cartItem.item.title}</p>
                            <p>Precio: ${cartItem.item.price}</p>
                            <p>Cantidad: {cartItem.quantity}</p>
                            <Button variant="danger" onClick={() => removeFromCart(cartItem.item.id)} className="w-25 my-2">X</Button>
                        </ListGroupItem>
                    </ListGroup>)
                    )}
                    <Button variant="warning" onClick={clear} className="w-25 my-2">Vaciar carrito</Button>
                </Col>
            </Row>
        </Container>
    </>
}

export default Cart;