import { Button, Col, FloatingLabel, Form, Row } from "react-bootstrap";

function CartForm({ validated, submitHandler, formData, setFormData }) {

    const handleOnChange = (e) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value
        })
    }

    return <>
        <Form noValidate validated={validated} onSubmit={submitHandler}>
            <Row>
                <Col>
                    <FloatingLabel className="mb-3" controlId="nombre" label="Nombre">
                        <Form.Control required type="text" value={formData.nombre} onChange={handleOnChange} placeholder="Nombre" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel className="mb-3" controlId="apellido" label="Apellido">
                        <Form.Control required type="text" value={formData.apellido} onChange={handleOnChange} placeholder="Apellido" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingLabel className="mb-3" controlId="telefono" label="Número de teléfono">
                        <Form.Control required type="number" value={formData.telefono} onChange={handleOnChange} placeholder="Número de teléfono" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Row>
                <Col>
                    <FloatingLabel className="mb-3" controlId="email" label="Correo electrónico">
                        <Form.Control value={formData.email} onChange={handleOnChange} required type="email" placeholder="Correo electrónico" />
                    </FloatingLabel>
                </Col>
                <Col>
                    <FloatingLabel className="mb-3" controlId="confirmEmail" label="Confirme su correo electrónico">
                        <Form.Control value={formData.confirmEmail} onChange={handleOnChange} required type="email" placeholder="Confirme su correo electrónico" />
                    </FloatingLabel>
                </Col>
            </Row>
            <Button variant="success" type="submit" className="w-50 my-2">Realizar mi compra</Button>
        </Form>
    </>
}

export default CartForm;