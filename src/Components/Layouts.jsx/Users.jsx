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
    speed: 4000,
    cssEase: "linear",
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: false,
    draggable: false,
    swipe: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } }
    ]
  };

  return (
    <div className="pt-5 pb-7 md:pb-[41px] max-w-[520px] md:max-w-[680px] lg:max-w-[1261.56px] m-auto">

      <h3 className='text-center text-TextColor font-medium text-xl pb-8'>
        Loved by 25 million+ users
      </h3>

      <div className="relative">
        <Slider {...settings} className='gap-x-[54.61px] '>

          {/* Original images */}
          <div className="dark:invert"><Image imgsrc={Circooles} /></div>
<div className="dark:invert"><Image imgsrc={Quotient} /></div>
<div className="dark:invert"><Image imgsrc={Hourglass} /></div>
<div className="dark:invert"><Image imgsrc={Command} /></div>
<div className="dark:invert"><Image imgsrc={Catalog} className="pl-5" /></div>
<div className="dark:invert"><Image imgsrc={Layers} /></div>

          {/* Duplicated for smooth infinite loop */}
          <div className="dark:invert"><Image imgsrc={Circooles} /></div>
<div className="dark:invert"><Image imgsrc={Quotient} /></div>
<div className="dark:invert"><Image imgsrc={Hourglass} /></div>
<div className="dark:invert"><Image imgsrc={Command} /></div>
<div className="dark:invert"><Image imgsrc={Catalog} className="pl-5" /></div>
<div className="dark:invert"><Image imgsrc={Layers} /></div>

        </Slider>

        {/* Overlay – fixed */}
        <div className="absolute inset-0 bg-white/60 dark:bg-transparent pointer-events-none"></div>
      </div>

    </div>
  );
};

export default Users;
