function ItemDetail({item}){
    return <>
        <div>
            <p>Id: {item.id}</p>
            <p>Titulo: {item.title}</p>
            <p>Descripcion: {item.description}</p>
            <p>Precio: {item.price}</p>
            <img src={item.pictureUrl} alt={item.title}/>
        </div>
    </>
};

export default ItemDetail;