import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Alert, Button, Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import CartForm from "../CartForm/CartForm";


function Cart() {
    const { cartItems, clear, removeFromCart } = useCartContext();
    const [total, setTotal] = useState();
    const [validated, setValidated] = useState(false);
    const [order, setOrder] = useState();
    const [emailInvalid, setEmailInvalid] = useState(false);

    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        confirmEmail: '',
    });

    function comprar(event) {
        const form = event.currentTarget;
        event.preventDefault();
        setValidated(true);
        if (formData.email !== formData.confirmEmail) {
            return setEmailInvalid(true);
        }

        if (form.checkValidity() === true) {
            setEmailInvalid(false);
            event.stopPropagation();
            let order = {
                nombre: formData.nombre,
                apellido: formData.apellido,
                telefono: formData.telefono,
                email: formData.email,
                items: [],
                quantity: 0,
                createdAt: new Date()
            };

            const db = getFirestore();
            const ordersCollection = collection(db, "orders");
            cartItems.forEach((item) => {
                order.items.push(item.item);
                order.quantity = order.quantity + item.quantity;

                const itemDoc = doc(db, "items", item.item.id);
                updateDoc(itemDoc, { stock: item.item.stock - item.quantity });
            });
            addDoc(ordersCollection, order).then(({ id }) => {
                return setOrder({ id });
            })
            clear();
        }
    }

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
                <Col lg={8}>
                    <h1>Carrito</h1>
                    {cartItems.length <= 0
                        ?
                        <>
                            <p>No hay items en el carrito</p>
                            <Link to="/">Volver</Link>
                        </>
                        :
                        <>
                            <Button variant="warning" onClick={clear} className="w-25 my-2 mr-2">Vaciar carrito</Button>
                            {cartItems.map((cartItem) =>
                            (<ListGroup key={cartItem.item.id}>
                                <ListGroupItem>
                                    <p>{cartItem.item.title}</p>
                                    <p>Precio: ${cartItem.item.price}</p>
                                    <p>Cantidad: {cartItem.quantity}</p>
                                    <Button id={cartItem.item.id} variant="danger" onClick={() => removeFromCart(cartItem.item.id)} className="my-2">X</Button>
                                </ListGroupItem>
                            </ListGroup>)
                            )}
                            <h2 className="mt-2">Total:  ${total} </h2>
                        </>
                    }
                </Col>
            </Row>
            <Row className="mt-5 justify-content-center">
                <Col lg={8}>
                    <h2>
                        Llene sus datos para comprar
                    </h2>
                    {
                        order &&
                        <div>
                            <Alert key="success" variant="success">
                                <h3>Orden realizada exitosamente!</h3>
                                <p>Id de la orden: <b>{order.id}</b></p>
                            </Alert>
                        </div>
                    }
                    {
                        emailInvalid &&
                        <Alert key="danger" variant="danger">
                            Los correos no coinciden
                        </Alert>
                    }
                    {!order && <CartForm submitHandler={comprar} validated={validated} formData={formData} setFormData={setFormData} />}
                </Col>
            </Row>
        </Container>

    </>
}

export default Cart;