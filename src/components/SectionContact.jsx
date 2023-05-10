import Llamanos from "../assets/LlamanosYa.svg";
import Escribenos from "../assets/escribenos.svg";
import ShowRoom from "../assets/showroom.svg";
function SectionContact() {
  return (
    <div className="container-fluid" style={{ background: "#EFF2F6" }} id='contactanos'>
      <div className="container-contactanos">
        <h2> ¡Qué esperas, contáctanos!</h2>

        <div className="container-contactanos-datos container" data-aos="fade-right">
          <div className="container-contactanos-datos__dato">
            <img loading="lazy" src={Llamanos} alt="" />
            <p className="container-contactanos-datos__dato-titulo">Llámanos</p>
            <p>+51 980 666 429</p>
          </div>

          <div className="container-contactanos-datos__dato">
            <img loading="lazy" src={Escribenos} alt="" />
            <p className="container-contactanos-datos__dato-titulo">Escribenos</p>
            <p>krosas@cassinelli.com</p>
          </div>

          <div className="container-contactanos-datos__dato">
            <img loading="lazy" src={ShowRoom} alt="" />
            <p className="container-contactanos-datos__dato-titulo">Showroom</p>
            <p>Av.Republica de Panamá </p>
            <p>
            N°4495
            </p>
            <p>Surquillo, Lima, Peru</p> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionContact;
