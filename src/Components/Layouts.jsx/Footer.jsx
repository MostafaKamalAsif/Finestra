import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { GoArrowUpRight } from "react-icons/go";
import Image from '../Image';
import LogoIcon from '/src/assets/LogoIcon.svg'
const Footer = () => {
  return (
    <>
    <div className="bg-[url(/src/assets/Footer.svg)] bg-center bg-cover bg-no-repeat pt-[86px] pb-[46px] rounded-4xl">
    
    <Container>
        <Flex className={'justify-between pb-[120px]'}>
            <h2 className='text-[80px] font-medium text-TextColor '>Let’s Sit &Talk</h2>
            <div className="w-[469px] relative">
                <input type="email" placeholder='Enter Your Email' className='placeholder:text-[40px] text-[40px]   w-full  pb-9.5 outline-none border-b border-b-SecondryColor'/>
               <GoArrowUpRight className='absolute top-[30%] right-0 text-SecondryColor w-10 h-10 -translate-y-1/2'/>
            </div>
            
        </Flex>

        <Flex className={'items-start pb-[227px]'}>
          <div className="w-[305px] mr-[383px] ">
<h3 className='text-SecondryColor text-[24px] pb-6'>Address</h3>
<p className='text-SecondryColor text-[18px] leading-[150%]'>475 Cherry Dr, Troy, Michigan 48083 United States ( (248) 823-3200 )</p>
          </div>
          <Flex className={'justify-between w-[608px]'}>
            <div className="">
              <h3 className='text-SecondryColor text-[18px] font-medium pb-6'>Company</h3>
              <ul className='space-y-4 text-[#6B7280] text-[16px] cursor-pointer'>
                <li>About</li>
                <li>Pricing</li>
                <li>Jobs</li>
                <li>Blog</li>
              </ul>
            </div>
             <div className="">
              <h3 className='text-SecondryColor text-[18px] font-medium pb-6'>Product</h3>
              <ul className='space-y-4 text-[#6B7280] text-[16px] cursor-pointer'>
                <li>Sales Software</li>
                <li>Marketplace</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
             <div className="">
              <h3 className='text-SecondryColor text-[18px] font-medium pb-6'>Help Center</h3>
              <ul className='space-y-4 text-[#6B7280] text-[16px] cursor-pointer'>
                <li>Community</li>
                <li>Knowledge Base</li>
                <li>Academy</li>
                <li>Support</li>
              </ul>
            </div>
          </Flex>
        </Flex>


        <Flex className={'justify-between'}>
<div className="text-SecondryColor text-[16px]">© 2024 Copyright By Sansbro - Finestra</div>
<Image imgsrc={LogoIcon}/>
<div className="">
              <ul className='flex text-SecondryColor text-[16px] gap-x-[23.75px] cursor-pointer'>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
                <li>Legal</li>
                <li>Recalls</li>
              </ul>
            </div>
        </Flex>

    </Container>
    </div>
    </>
  )
}

export default Footer