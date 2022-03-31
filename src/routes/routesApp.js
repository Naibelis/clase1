import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import ItemDetailContainer from "../container/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "../container/ItemListContainer/ItemListContainer";

function RoutesApp() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="Hola Bienvenidos a mi Tienda" />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
        <Route path="/detalle/:detalleId" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
