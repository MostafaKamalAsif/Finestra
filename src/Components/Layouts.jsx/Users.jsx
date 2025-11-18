import React from 'react';
import Image from '../Image';

import Circooles from '/src/assets/Circooles.png';
import Quotient from '/src/assets/Quotient.png';
import Hourglass from '/src/assets/Hourglass.png';
import Command from '/src/assets/Command.png';
import Catalog from '/src/assets/Catalog.png';
import Layers from '/src/assets/Layers.png';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Users = () => {
var settings = {
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 0,
  speed: 5000,
  cssEase: "linear",
  slidesToShow: 6,
  slidesToScroll: 1,
  pauseOnHover: false,
  draggable: true,
  swipe: true,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 640, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ]
};


  return (
    <div className="pt-5 pb-7 md:pb-[41px] w-full overflow-hidden">
      <div className="max-w-[520px] md:max-w-[680px] lg:max-w-[1261.56px] m-auto px-4 md:px-0">
        
        <h3 className='text-center text-TextColor font-medium text-xl pb-8'>
          Loved by 25 million+ users
        </h3>

        <div className="relative overflow-hidden">
        <Slider {...settings} className="users-slider">
  <div className="dark:invert"><Image imgsrc={Circooles} /></div>
  <div className="dark:invert"><Image imgsrc={Quotient} /></div>
  <div className="dark:invert"><Image imgsrc={Hourglass} /></div>
  <div className="dark:invert"><Image imgsrc={Command} /></div>
  <div className="dark:invert"><Image imgsrc={Catalog} /></div>
  <div className="dark:invert"><Image imgsrc={Layers} /></div>
</Slider>


          {/* Overlay */}
          <div className="absolute inset-0 bg-white/60 dark:bg-transparent pointer-events-none"></div>
        </div>

      </div>
    </div>
  );
};

export default Users;