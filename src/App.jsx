import './App.css'

/* import Aos from 'aos'
import 'aos/dist/aos.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect } from "react"; */
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import SectionRequest from './components/SectionRequest'
import SectionTeam from './components/SectionTeam'
import SectionContact from './components/SectionContact';
import Footer from './components/Footer';
import SectionFeaturedProjects from './components/SectionFeaturedProjects';

function App() {

/*   useEffect(() => {
    Aos.init()
   }, [])
 */

  return (
    <>
    <Navbar/>
    <Hero/>
    <SectionRequest/>
    <SectionTeam/>
    <SectionContact/>
    <SectionFeaturedProjects/>
    <Footer/>
 </>
  )
}

export default App
