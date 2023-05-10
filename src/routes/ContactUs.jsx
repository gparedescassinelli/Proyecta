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



function ContactUs() {
  useEffect(() => {
    Aos.init()
   }, [])
  return (
    <>
    <Navbar/>
    <AboutUs/>
    <Inspiring/>
    <VisionMision/>
    <Showroom/>
    <Footer/>
    </>
  )
}

export default ContactUs