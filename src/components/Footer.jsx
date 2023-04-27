import IconoFooter from "../assets/icono-footer.svg";
import Fb from "../assets/fb.svg";
import Whatsp from "../assets/whatsap.svg";
import Correo from "../assets/correo.svg";
import Telefono from "../assets/telefono.svg";
function Footer() {
  return (
    <footer className="container-fuid footer">
      <div className="container">
        <div className="container-footer">
          <div className="container-footer__enlace-movil">
            <div className="container-footer__enlace-titulo">
              <img loading="lazy" src={IconoFooter} alt="" />
              <p>PROYECTA</p>
            </div>
            <p>+511 - 518-2132</p>
            <p>contacto@proyecta.com</p>
            <p>Av. República de Panamá 4495, Surquillo.</p>
            <img src={Whatsp} alt="" />
            <img src={Fb} alt="" className="ms-3" />
          </div>
          <div className="container-footer__enlace">
            <div className="container-footer__enlace-titulo">
              <img loading="lazy" src={IconoFooter} alt="" />
              <p>PROYECTA</p>
            </div>
            <p>Horario de atención:</p>
            <p>L-V: 10am - 7pm</p>
            <p>S-D: 10am - 6pm</p>
          </div>

          <div className="container-footer__enlace">
            <h3>Contáctanos</h3>
            <div className="contenido-footer__contacto">
              <img src={Telefono} alt="" />
              <p> +511 - 518-2132</p>
            </div>
            <div className="contenido-footer__contacto">
            <img src={Correo} alt="" />
              <p>      contacto@proyecta.com</p>
            </div>
            <p>Av. República de Panamá 4495, Surquillo.</p>
          </div>

          <div className="container-footer__enlace">
            <h3>Enlaces</h3>
            <p>
              <a href="#"> Quiénes somos</a>
            </p>
            <p>
              <a href="#"> Nuestras oficinas</a>
            </p>
          </div>

          <div className="container-footer__enlace">
            <h3>Legal</h3>
            <p>
              <a href="#">Política de privacidad</a>
            </p>
            <p>
              <a href="#">Términos y condiciones</a>
            </p>
          </div>
        </div>
        <hr />
        <p className="text-center py-3 m-0">Copyright 2023 - Todos los derechos reservados</p>
      </div>
    </footer>
  );
}

export default Footer;
