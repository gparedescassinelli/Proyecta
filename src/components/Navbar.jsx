function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <svg
          width="50"
          height="49"
          viewBox="0 0 50 49"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="0.260376" width="50" height="48.1481" fill="#275DA4" />
          <path
            d="M22.2222 23.0999L43.3166 0.260376H49.9999V48.4085H43.3166L22.2222 23.0999Z"
            fill="#264773"
          />
          <path
            
            d="M16.0533 16.3965L21.7394 23.362L15.2264 30.5069L15.4318 30.6941L15.4321 30.713L15.4522 30.7127L15.5306 30.7841L15.5979 30.7103L27.7778 30.5073L27.7762 30.4104L43.2095 23.0999H43.2099V0.260382H42.7989L42.7984 0.259981L29.7292 14.5971L19.9175 8.46478L23.8268 0.440384L23.4568 0.26015L19.5665 8.24546L6.79029 0.260304L6.79011 0.253141L6.37865 0.260175L6.4421 3.97207L3.19959 0L2.8808 0.260237L6.45347 4.63675L6.74479 21.679L0.39472 0.144001L0 0.260393L6.77119 23.2236L6.95757 34.127L4.61697e-05 48.4083L0.370001 48.5885L6.97309 35.0348L7.2017 48.4083L7.61316 48.4013L7.37072 34.2186L9.01693 30.8395L14.1975 48.4084V48.4086H14.609V30.5074H14.1975L14.1975 46.9534L9.2842 30.2909L12.5593 23.5685L14.1975 30.507L14.598 30.4124L12.8441 22.9839L16.0533 16.3965ZM27.2435 30.1046L22.0025 23.6843L15.9788 30.2923L27.2435 30.1046ZM42.424 23.0166L27.6871 29.9972L22.2827 23.3769L29.8021 15.128L42.424 23.0166ZM42.7984 0.870861L30.0839 14.8188L42.7984 22.7654V0.870861ZM29.4474 14.9063L22.0197 23.0546L16.2518 15.989L19.7362 8.8368L29.4474 14.9063ZM15.7666 16.0453L12.6946 22.351L9.34983 8.1848L15.7666 16.0453ZM6.87385 5.15172L8.75493 7.45604L12.4098 22.9356L9.1116 29.7056L7.1817 23.1607L6.87385 5.15172ZM15.9651 15.6378L9.13366 7.26923L7.73238 1.3344L19.3853 8.61748L15.9651 15.6378ZM8.53875 6.54047L7.23634 1.02437L6.79862 0.7508L6.86249 4.48705L8.53875 6.54047ZM7.3552 33.3108L7.2081 24.7053L8.84433 30.2542L7.3552 33.3108Z"
            fill="#B6B6B6"
          />
        </svg>

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
            {" "}
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
                Contactanos
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
