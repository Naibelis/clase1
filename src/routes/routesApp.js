import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "../components/Cart/Cart";
import NavBar from "../components/NavBar/NavBar";
import ItemDetailContainer from "../container/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../container/ItemListContainer/ItemListContainer";
import CartContextProvider from "../context/CartContext";

function RoutesApp() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Hola Bienvenidos a mi Tienda" />} />
          <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
          <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default RoutesApp;
