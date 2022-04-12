import { useEffect, useState } from "react";
import { Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

function Cart() {
    const { cartItems, clear, removeFromCart } = useCartContext();
    const [total, setTotal] = useState();

    useEffect(() => {
        let total = 0
        cartItems.forEach(e => {
            total += e.item.price * e.quantity
        });
        setTotal(total)
    }, [cartItems]);

    return <>
        <Container className="my-3">
            <Row className="justify-content-center">
                {cartItems.length <= 0 ?
                    <Col md={10}>
                        <h1>No hay items en el carrito</h1>
                        <Link to="/">Volver</Link>
                    </Col> :
                    <Col md={10}>
                        <h1>Carrito</h1>
                        {cartItems.map((cartItem) =>
                        (<ListGroup>
                            <ListGroupItem>
                                <p>{cartItem.item.title}</p>
                                <p>Precio: ${cartItem.item.price}</p>
                                <p>Cantidad: {cartItem.quantity}</p>
                                <Button id={cartItem.item.id} variant="danger" onClick={() => removeFromCart(cartItem.item.id)} className="w-25 my-2">X</Button>
                            </ListGroupItem>
                        </ListGroup>)
                        )}
                        <h2>Total:  ${ total } </h2>
                        <Button variant="warning" onClick={clear} className="w-25 my-2">Vaciar carrito</Button>
                    </Col>
                }
            </Row>
        </Container>
    </>
}

export default Cart;