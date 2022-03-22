import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <button className="navbar-brand" onClick="#">
            Servicios Caninos
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <button className="nav-link active" aria-current="page" onClick="#">
                  Inicio
                </button>
              </li>
              <li className="nav-item">
                <button className="nav-link" onClick="#">
                  Registro
                </button>
              </li>
              <li className="nav-item dropdown">
                <button
                  className="nav-link dropdown-toggle"
                  onClick="#"
                  id="navbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Tienda
                </button>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <button className="dropdown-item" onClick="#">
                      Adiestramiento
                    </button>
                  </li>
                  <li>
                    <button className="dropdown-item" onClick="#">
                      Paseos
                    </button>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <button className="dropdown-item" onClick="#">
                      Cursos
                    </button>
                  </li>
                </ul>
              </li>
              <li></li>
            </ul>
          </div>
        </div>
        <CartWidget />
      </nav>
    </>
  );
}

export default NavBar;
