import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { GoArrowUpRight } from "react-icons/go";
import Image from '../Image';
import LogoIcon from '/src/assets/LogoIcon.svg'

const Footer = () => {
  return (
    <>
    <div className="bg-[url(/src/assets/Footer.svg)] bg-center bg-cover bg-no-repeat pt-12 md:pt-[86px] pb-[46px] overflow-hidden  rounded-4xl dark:invert filter">
    
    <div className='max-w-[500px] md:max-w-[720px]  lg:max-w-[1296px] m-auto'>
      {/* Top part  */}
        <Flex className={'flex justify-between pb-[60px] md:pb-[120px] '}>
            <h2 className='text-[24px] md:text-4xl lg:text-[80px] font-medium text-TextColor dark:text-[#08080C] scroll-reveal-left'>Let's Sit &Talk</h2>
            <div className="w-[230px] md:w-[370px] lg:w-[469px] relative scroll-reveal-right">
                <input 
                  type="email" 
                  placeholder='Enter Your Email' 
                  className='placeholder:text-[20px] md:placeholder:text-[28px] lg:placeholder:text-[40px] text-xl md:text-[20px] lg:text-[40px] w-full pt-2 pb-6.5 md:pb-9.5 md:pt-5 outline-none  border-b border-b-SecondryColor dark:border-b-gray-600 bg-transparent text-TextColor dark:text-[#08080C]   duration-300'
                />
                <GoArrowUpRight className='absolute top-[40%]  lg:top-[30%] right-5 md:right-5 lg:right-0 text-SecondryColor dark:text-[#1F2937] w-5 h-5 md:w-8 md:h-8 lg:w-10 lg:h-10 -translate-y-1/2 hover-scale icon-scale-hover cursor-pointer'/>
            </div>
        </Flex>
{/* Address part  */}
        <Flex className={'items-start flex-wrap md:gap-6 lg:gap-0 justify-between pb-[100px] md:pb-[227px]'}>
          <div className="w-[305px]  md:mr-[383px] scroll-reveal mb-5 md:mb-0">
            <h3 className='text-SecondryColor dark:text-[#1F2937]  text-xl md:text-[24px] pb-6'>Address</h3>
            <p className='text-SecondryColor dark:text-[#1F2937]   md:text-[18px] leading-[150%]'>475 Cherry Dr, Troy, Michigan 48083 United States ( (248) 823-3200 )</p>
          </div>
     
          <Flex className={'justify-evenly md:justify-start md:gap-x-[134px] flex flex-wrap'}>
            {/* Copmpany part  */}
            <div className="scroll-reveal animate-delay-200">
              <h3 className='text-SecondryColor dark:text-[#1F2937]  text-[18px] font-medium pb-6'>Company</h3>
              <ul className='space-y-4 text-[#6B7280] dark:text-gray-400 text-[16px] cursor-pointer'>
                <li className='hover-slide-right'>About</li>
                <li className='hover-slide-right'>Pricing</li>
                <li className='hover-slide-right'>Jobs</li>
                <li className='hover-slide-right'>Blog</li>
              </ul>
            </div>
            {/* product part  */}

            <div className="scroll-reveal animate-delay-400">
              <h3 className='text-SecondryColor dark:text-[#1F2937]  text-[18px] font-medium pb-6'>Product</h3>
              <ul className='space-y-4 text-[#6B7280] dark:text-gray-400 text-[16px] cursor-pointer'>
                <li className='hover-slide-right'>Sales Software</li>
                <li className='hover-slide-right'>Marketplace</li>
                <li className='hover-slide-right'>Terms & Conditions</li>
                <li className='hover-slide-right'>Privacy Policy</li>
              </ul>
            </div>
            {/* Help center part  */}

            <div className="scroll-reveal animate-delay-600">
              <h3 className='text-SecondryColor dark:text-[#1F2937]  text-[18px] font-medium pb-6'>Help Center</h3>
              <ul className='space-y-4 text-[#6B7280] dark:text-gray-400 text-[16px] cursor-pointer'>
                <li className='hover-slide-right'>Community</li>
                <li className='hover-slide-right'>Knowledge Base</li>
                <li className='hover-slide-right'>Academy</li>
                <li className='hover-slide-right'>Support</li>
              </ul>
            </div>
          </Flex>
        </Flex>
         
         
        <Flex className={'justify-between  scroll-reveal'}>
          <div className="text-SecondryColor dark:text-[#1F2937] text-center md:text-start pb-5 md:pb-0 md:text-[16px]">© 2024 Copyright By Sansbro - Finestra</div>
          <div className=" ">
            <Image imgsrc={LogoIcon} className="hover-scale hover-rotate pb-5 md:pb-0  m-auto"/>
          </div>
          
          <div className="">
            <ul className='flex text-SecondryColor dark:text-[#1F2937] justify-evenly md:justify-start  text-[16px] md:gap-x-[23.75px] cursor-pointer'>
              <li className='hover-slide-right'>Terms</li>
              <li className='hover-slide-right'>Privacy</li>
              <li className='hover-slide-right'>Cookies</li>
              <li className='hover-slide-right'>Legal</li>
              <li className='hover-slide-right'>Recalls</li>
            </ul>
          </div>
        </Flex>

    </div>
    </div>
    </>
  )
}

export default Footer