//import { useState } from "react"
import CentrosComerciales from "../assets/D-CENTROS COMERCIALES.jpg";
import Hoteles from "../assets/D-HOTELES.jpg";
import Hospitales from "../assets/D-HOSPITALES.jpg";
import Condominios from "../assets/D-CONDOMINIOS.jpg";
import Instituciones from "../assets/D-INSTITUCIONALES.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay ,Pagination} from "swiper";
import Projects from "./Projects";


function SectionFeaturedProjects() {


    const proyectos = [
        {
            id:1,
            img:CentrosComerciales,
            name:'Centros comerciales'
        },
        {
            id:2,
            img:Hoteles,
            name:'Hoteles'
        },
        {
            id:3,
            img:Hospitales,
            name:'Hospitales'
        },
        {
            id:4,
            img:Condominios,
            name:'Condominios'
        },
        {
            id:5,
            img:Instituciones,
            name:'Instituciones'
        }
    ]

  return (
    <div>
        <div className="container">
         <h2 className="featuredproject-title">Proyectos Destacados</h2>
          <div className="swiperContainer">
            <Swiper
            modules={[Pagination,Autoplay]}
            autoplay={{
                delay:3000,
                disableOnInteraction:false
            }}
            pagination={{
                el:".pagination",
                clickable:true
            }}
            slidesPerView={3}
            breakpoints={{
                "@0.00":{
                    slidesPerView:1,
                    spaceBetween:25
                },
                "@0.50":{
                    slidesPerView:1.25,
                    spaceBetween:25
                },
                "@1.00":{
                    slidesPerView:2,
                    spaceBetween:25
                },
                "@1.25":{
                    slidesPerView:2.5,
                    spaceBetween:20
                },
                "@1.50":{
                    slidesPerView:3,
                    spaceBetween:30
                },
                "@1.75":{
                    slidesPerView:3,
                    spaceBetween:20
                },
            }}
            >
                {
                    proyectos.map((pro,i)=>
                    (
                        <SwiperSlide key={i}>
                            <Projects pro={pro}/>
                        </SwiperSlide>
                    )
                    )
                }

            </Swiper>
          </div>
     
         <div className="pagination custom-pagination"></div>
        </div>
    </div>
  )
}

export default SectionFeaturedProjects