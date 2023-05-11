import Aos from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
//import { Outlet } from 'react-router-dom';
import Hero from "../components/Hero";
import SectionRequest from "../components/SectionRequest";
import SectionTeam from "../components/SectionTeam";
import SectionContact from "../components/SectionContact";
import SectionFeaturedProjects from "../components/SectionFeaturedProjects";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
//import { useState } from "react";

function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  const location = useLocation();
  const ubicacion = location.pathname;

  return (
    <>
      <Helmet>
        <title>Proyecta - Bienvenido</title>
        <link rel="canonical" href="https://proyecta-cassinelli.com/" />
        <meta name="description" content="Proyectos que transforman tu ciudad, Entregamos valor a tus proyectos, con los mejores acabados" />
        <meta name="site_name" content="Proyecta - Proyectos que transforman tu ciudad"/>
      </Helmet>
      <Navbar ubicacion={ubicacion} />
      <Hero />
      <SectionRequest />
      <SectionTeam />
      <SectionContact />
      <SectionFeaturedProjects />
      <Footer />
      {/* 
    
    
    <Outlet/> */}
    </>
  );
}

export default Home;
