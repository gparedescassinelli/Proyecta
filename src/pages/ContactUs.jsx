import Aos from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect } from "react";
import AboutUs from "../components/AboutUs"
import Inspiring from "../components/Inspiring"
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
import VisionMision from '../components/VisionMision';
import Showroom from '../components/Showroom';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';



function ContactUs() {
  useEffect(() => {
    Aos.init()
   }, [])
   const location = useLocation();
   const ubicacion = location.pathname;
 
  return (
    <>
     <Helmet>
        <title>Quiénes somos</title>
        <link rel="canonical" href="https://proyecta-cassinelli.com/quienes-somos" />
        <meta name="description" content="Proyectos que transforman tu ciudad, Entregamos valor a tus proyectos, con los mejores acabados" />
      </Helmet>
    <Navbar ubicacion={ubicacion}/>
    <AboutUs/>
    <Inspiring/>
    <VisionMision/>
    <Showroom/>
    <Footer/>
    </>
  )
}

export default ContactUs