import Item from "../../components/Item/Item";

function ItemList({ items }) {
  return (
    <>
      <h1>ItemList</h1>
      {items.map((item) => (
        <Item item={item} />
      ))}
    </>
  );
}

export default ItemList;
