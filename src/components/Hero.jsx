function Hero() {
  return (
    <div className="p-5 text-center bg-image hero">
      <div className="mask" /* style="background-color: rgba(0, 0, 0, 0.6);" */>
        <div className="d-flex justify-content-start align-items-center h-100 container">
          <div className="text-white">
            <h1 className="mb-3 hero-title animate__animated animate__bounceInLeft">
              Proyecta - Proyectos que transforman tu ciudad
            </h1>
            <h4 className="mb-3 hero-subtitle animate__animated animate__bounceInRight">
              Entregamos valor a tus proyectos, con los mejores acabados
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
