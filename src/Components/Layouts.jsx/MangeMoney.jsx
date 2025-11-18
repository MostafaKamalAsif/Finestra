import React, { useState } from 'react';
import Container from '../Container';
import Flex from '../Flex';
import Button from '../Button';
import BarChartCard from '../BarChartCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { GrNext } from "react-icons/gr";
// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
 
  return (
    <div
      onClick={onClick}
      className="absolute top-1/2 -right-8 md:-right-12 transform -translate-y-1/2 z-10 
               w-8 h-8  md:w-12.5 md:h-12.5 flex items-center justify-center 
                 rounded-full border border-[#212121]/50 bg-white
                 shadow-lg cursor-pointer 
                 transition-all duration-300"
    >
      <GrNext className='w-5 h-5 md:w-[29px] md:h-[29px] text-TextColor dark:text-[#08080C]'/>
    </div>
    
  );
};

const MangeMoney = () => {
  const [Active, setActive] = useState('Contact');
 const PrevArrow = () => <div style={{ display: "none" }} />;
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  return (
    <div className="py-[72px] md:py-[92px]">
      <Container>
        <div className="max-w-[1296px] m-auto">
        <Flex className={'items-end '}>
          <div className=" md:w-[649px]">
            <h2 className='text-[35px] md:text-[72px] font-medium leading-[110%] md:pr-40 text-TextColor text-center md:text-start'>
              Manage Money Wisely
            </h2>
            <p className='text-[#6B7280] text-[12px] md:text-[18px] font-medium leading-[170%] pt-6 md:pb-0 pb-5 px-2 md:px-0 text-center md:text-start'>
              Master the Art of Financial Management: Strategies and Tools to Optimize Your Budget, Build Wealth, and Secure a Stable Financial Future
            </p>
          </div>

          <div className="ms-auto">
            <Button className={`py-2.5 px-4  md:py-3.5 md:px-5 rounded-[66px] bg-[#000000] border cursor-pointer hover:text-TextColor hover:bg-transparent duration-300 w-fit mx-auto md:mx-0`}>
              Get Started Free
            </Button>
            <p className='text-[#6B7280] md:text-[16px] text-center md:text-start font-medium pt-[9px]'>explore more about us</p>
          </div>
        </Flex>

        <Flex className={'gap-x-4 pt-8.5'}>
          <BarChartCard />

          {/* Quick Transfer */}
          <div className="w-[420px] mx-auto md:mx-0  md:w-[532px] md:max-h-[415px] bg-[#F6F6F6] dark:bg-gray-800 rounded-3xl mt-4 md:mt-0 px-6 pt-6 pb-[41px] ">
            <Flex className={'justify-between'}>
              <h3 className='text-[18px] text-center md:text-start pb-2 md:pb-0 md:text-[28px] text-TextColor'>Quick Transfer</h3>
              <Flex className={'text-center '}>
               <button
  onClick={() => setActive('All')}
  className={`text-[18px] text-TextColor w-20 
    ${Active === "All" 
      ? 'p-[13px] bg-[#FF5F5F]/20 dark:bg-[#FF5F5F]/30 rounded-[50px]' 
      : ""}`}
>
  All
</button>

<button
  onClick={() => setActive('Contact')}
  className={`text-[18px] w-[102px] text-TextColor 
    ${Active === "Contact" 
      ? 'p-[13px] bg-[#FF5F5F]/20 dark:bg-[#FF5F5F]/30 rounded-[50px]' 
      : ""}`}
>
  Contact
</button>

              </Flex>
            </Flex>
          
          {/* Slider part  */}

            <div className="flex pt-10 min-w-0">
              {/* Add New - stays fixed */}
              <div className="flex flex-col items-center pr-5.5">
                <div className="w-15 h-15 md:w-20 md:h-20 border-2 border-dashed border-[#898989] mb-3 rounded-full flex items-center justify-center">
                  <span className="text-[#282930] dark:text-TextColor text-xl ">+</span>
                </div>
                <span className='text-TextColor font-medium text-[18px] pl-[3px]'>Add New</span>
              </div>

              {/* Slider */}
              <div className="flex-1 max-w-[220px] md:max-w-[320px]">
                <Slider {...settings}>
                  {['Albert Sky', 'Edwer San', 'Erwan Why', 'Albert Sky', 'Erwan Why'].map((name, idx) => (
                    <div key={idx} className="flex flex-col items-center px-1.5">
                      <div className="bg-[#000000]/20 w-15 h-15 md:w-20 md:h-20  rounded-full mb-3"></div>
                      <span className='text-TextColor/60 font-medium text-[12px] md:text-[18px]'>{name}</span>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>

<Flex className={'flex justify-between pt-14 '}>
  <h3 className='font-medium text-[#212121] dark:text-white text-4xl md:text-[56px]'>$349.<span className='text-[#212121]/60 dark:text-white/60'>00</span></h3>
  <Button className={'w-[100px] md:w-[147px] text-center font-medium px-5 py-3.5 bg-[#FF5F5F] rounded-[66px]'}>Send</Button>
</Flex>
<hr className='border-TextColor/16 mt-6.5'/>
          </div>
        </Flex>
        </div>
      </Container>
    </div>
  );
};

export default MangeMoney;
