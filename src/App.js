import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./container/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer greeting="Hola Bienvenidos a mi Tienda"/>
    </>
  );
}

export default App;
