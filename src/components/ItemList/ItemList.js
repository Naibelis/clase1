import { Col, Row } from "react-bootstrap";
import Item from "../../components/Item/Item";

function ItemList({ items }) {
  return (
    <>
      <h3>Catálogo</h3>
      <Row className="my-2 justify-content-around">
        {items.map((item) => (
          <Col key={item} xs={5} xl={4} className="">
            <Item item={item} />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ItemList;
