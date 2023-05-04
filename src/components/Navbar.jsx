
import IConoHeader from "../assets/IconoHeader.svg";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <img src={IConoHeader} alt=""/>
        <a className="navbar-brand title ms-4" href="#">
          PROYECTA
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            width="29"
            height="25"
            viewBox="0 0 29 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="29" height="3" fill="#275DA4" />
            <rect
              x="7.83789"
              y="11"
              width="21.1622"
              height="3"
              fill="#275DA4"
            />
            <rect y="22" width="29" height="3" fill="#275DA4" />
          </svg>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
            {/* Agregado estilo personalizado aquí */}
            <li className="nav-item">
              <a
                className="nav-link active navbar-link"
                aria-current="page"
                href="#"
              >
                Quiénes somos
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar-link-contactanos" href="#">
              Contáctanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
