import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { GoArrowUpRight } from "react-icons/go";
import Image from '../Image';
import LogoIcon from '/src/assets/LogoIcon.svg'

const Footer = () => {
  return (
    <>
    <div className="bg-[url(/src/assets/Footer.svg)] bg-center bg-cover bg-no-repeat pt-[86px] pb-[46px] rounded-4xl dark:invert filter">
    
    <Container>
        <Flex className={'justify-between pb-[120px]'}>
            <h2 className='text-[80px] font-medium text-TextColor dark:text-[#08080C] scroll-reveal-left'>Let's Sit &Talk</h2>
            <div className="w-[469px] relative scroll-reveal-right">
                <input 
                  type="email" 
                  placeholder='Enter Your Email' 
                  className='placeholder:text-[40px] text-[40px] w-full pb-9.5  outline-none  border-b border-b-SecondryColor dark:border-b-gray-600 bg-transparent text-TextColor dark:text-[#08080C]   duration-300'
                />
                <GoArrowUpRight className='absolute top-[30%] right-0 text-SecondryColor dark:text-[#1F2937] w-10 h-10 -translate-y-1/2 hover-scale icon-scale-hover cursor-pointer'/>
            </div>
        </Flex>

        <Flex className={'items-start pb-[227px]'}>
          <div className="w-[305px] mr-[383px] scroll-reveal">
            <h3 className='text-SecondryColor dark:text-[#1F2937] text-[24px] pb-6'>Address</h3>
            <p className='text-SecondryColor dark:text-[#1F2937]  text-[18px] leading-[150%]'>475 Cherry Dr, Troy, Michigan 48083 United States ( (248) 823-3200 )</p>
          </div>

          <Flex className={'justify-between w-[608px]'}>
            <div className="scroll-reveal animate-delay-200">
              <h3 className='text-SecondryColor dark:text-[#1F2937]  text-[18px] font-medium pb-6'>Company</h3>
              <ul className='space-y-4 text-[#6B7280] dark:text-gray-400 text-[16px] cursor-pointer'>
                <li className='hover-slide-right'>About</li>
                <li className='hover-slide-right'>Pricing</li>
                <li className='hover-slide-right'>Jobs</li>
                <li className='hover-slide-right'>Blog</li>
              </ul>
            </div>

            <div className="scroll-reveal animate-delay-400">
              <h3 className='text-SecondryColor dark:text-[#1F2937]  text-[18px] font-medium pb-6'>Product</h3>
              <ul className='space-y-4 text-[#6B7280] dark:text-gray-400 text-[16px] cursor-pointer'>
                <li className='hover-slide-right'>Sales Software</li>
                <li className='hover-slide-right'>Marketplace</li>
                <li className='hover-slide-right'>Terms & Conditions</li>
                <li className='hover-slide-right'>Privacy Policy</li>
              </ul>
            </div>

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

        <Flex className={'justify-between scroll-reveal'}>
          <div className="text-SecondryColor dark:text-[#1F2937]  text-[16px]">© 2024 Copyright By Sansbro - Finestra</div>
          <div className=" ">
            <Image imgsrc={LogoIcon} className="hover-scale hover-rotate"/>
          </div>
          
          <div className="">
            <ul className='flex text-SecondryColor dark:text-[#1F2937]  text-[16px] gap-x-[23.75px] cursor-pointer'>
              <li className='hover-slide-right'>Terms</li>
              <li className='hover-slide-right'>Privacy</li>
              <li className='hover-slide-right'>Cookies</li>
              <li className='hover-slide-right'>Legal</li>
              <li className='hover-slide-right'>Recalls</li>
            </ul>
          </div>
        </Flex>

    </Container>
    </div>
    </>
  )
}

export default Footer