import React from "react";
import Slider from "react-slick";
export default function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div className="flex flex-col text-black text-xl tracking-widest" >
          <h2>Facil acesso</h2>
          <img className="w-[90%]" src="../public/car1.jpg" alt="" />
        </div>

        <div className="flex flex-col text-black text-xl tracking-widest" >
          <h2>Sem codigos complicados</h2>
          <img className="w-[90%]" src="../public/car2.jpg" alt="" />
        </div>
        <div className="flex flex-col text-black text-xl tracking-widest">
          <h2>Atendimento 24h </h2>
          <img className="w-[90%]" src="../public/car3.jpg" alt="" />
        </div>

        <div className="flex flex-col text-black text-xl tracking-widest">
          <h2>Sem hardware </h2>
          <img  className="w-[90%]" src="../public/car4.jpg" alt="" />
        </div>
      </Slider>
    </div>
  );
}

/**
 * 
 * 
        
 */
