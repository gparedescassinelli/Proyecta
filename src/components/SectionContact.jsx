import Llamanos from "../assets/LlamanosYa.svg";
import Escribenos from "../assets/escribenos.svg";
import ShowRoom from "../assets/showroom.svg";
function SectionContact() {
  return (
    <div className="container-fluid" style={{ background: "#EFF2F6" }}>
      <div className="container-contactanos">
        <h2> ¡Qué esperas, contáctanos!</h2>

        <div className="container-contactanos-datos" data-aos="fade-right">
          <div className="container-contactanos-datos__dato">
            <img loading="lazy" src={Llamanos} alt="" />
            <p>Llámanos</p>
            <p>+51 980 666 429</p>
          </div>

          <div className="container-contactanos-datos__dato" data-aos="fade-left">
            <img loading="lazy" src={Escribenos} alt="" />
            <p>Escribenos</p>
            <p>krosas@cassinelli.com</p>
          </div>

          <div className="container-contactanos-datos__dato" data-aos="fade-right">
            <img loading="lazy" src={ShowRoom} alt="" />
            <p>Showroom</p>
            <p>Av. Republica de Panamá N°4495</p>
            <p>Surquillo, Lima, Peru</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionContact;
