import Vision from "../assets/vision.svg";
import Mision from "../assets/prueba.jpg";

export default function VisionMision() {
  return (
    <div className="container-visionmision" data-aos="fade-up">
        <div className="container container-visionmision-textos">
          
          <div className="container-visionmision__info">
          <img src={Mision} alt="" />
            <h2>
            Visión 
            </h2>
            <p>
            Ofrecer a nuestros clientes productos de la más alta calidad y a precios competitivos, para satisfacer sus necesidades y requerimientos en sus proyectos de construcción. Nos comprometemos a brindar un servicio excepcional, con personal altamente capacitado y un amplio conocimiento en el rubro de la construcción, para garantizar la satisfacción total de nuestros clientes y contribuir al éxito de sus proyectos.
            </p>
          </div>

          <div className="container-visionmision__info">
          <img src={Vision} alt="" />
            <h2>Misión</h2>
            <p>
            Ser la empresa líder en el mercado de materiales de acabados, reconocida por nuestra calidad, excelente servicio al cliente e innovación constante en nuestro catálogo de productos. Nos esforzamos por ser un socio confiable y de confianza para nuestros clientes, proporcionando soluciones integrales para sus proyectos y manteniendo una sólida relación a largo plazo basada en la honestidad, la transparencia y la calidad en todo lo que hacemos.
            </p>
          </div>
            
        </div>
    </div>
  )
}
