import DTeam from "../assets/DHomecuadro.jpg";
import "aos/dist/aos.css";
function SectionTeam() {
  return (
    <div>
      <div className="container">
        <h2 className="title-equipo-especializado">
          Contamos con un equipo especializado
        </h2>

        <div className="container-equipo-especializado" data-aos="fade-up-left" >
          <div >
            <img loading="lazy" src={DTeam} alt="equipo especializado" />
          </div>

          <div className="container-equipo-servicios"  >
            <div >
              <h3 className="subtitle-team">Servicio integral</h3>
              <p>
                Tenemos un equipo de especialistas que ven de punta a punta tu
                proyecto, desde los planos y diseño, hasta la selección de los
                productos ideales y entrega en obra.
              </p>
            </div>
            <div >
              <h3 className="subtitle-team">Asesoría personalizada</h3>
              <p>
                Todos nuestros asesores se encargan de brindarte el apoyo de
                inicio a fin, trabajarán junto a ti, interiorizando tu proyecto
                como si fuera uno nuestro.
              </p>
            </div>

            <div>
              <h3 className="subtitle-team">Experiencia sin precedentes</h3>
              <p>
                Tener un equipo con años de experiencia en el mercado de
                construcción es sin duda un gran activo para cualquier empresa
                en este sector. Otro beneficio importante para los clientes al
                trabajar con un equipo con experiencia en construcción es que
                pueden estar seguros de que se cumplirán los estándares de
                calidad
              </p>
            </div>
            <div>
              <button className="btn-proyecta-team">Escribenos</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionTeam;
