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

function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Navbar />
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
