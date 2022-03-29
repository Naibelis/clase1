import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./container/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./container/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <ItemListContainer greeting="Hola Bienvenidos a mi Tienda" />
            <br />
            <h1>Item Detail</h1>
            <ItemDetailContainer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
