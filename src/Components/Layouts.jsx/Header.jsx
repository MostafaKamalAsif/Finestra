import React, { useState } from 'react'
import Image from '../Image'
import Logo from '/src/assets/Logo.svg'
import { TbHome2 } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa"; 
import Mode from '../Mode';
import Flex from '../Flex';

const Header = ({ scrollToSection, refs }) => {
  const [active, setActive] = useState('Home');

  return (
    <header className=' bg-white dark:bg-gray-900 animate-fade-in-down'>
      <div className="flex max-w-[1400px] m-auto pt-[13px] pb-3.5 justify-between items-center">
        <div className='flex items-center gap-x-[9px]'>
          <Image imgsrc={Logo} className={'pt-1 pb-0.5 hover-scale'}/>
          <h3 className='text-TextColor text-[24px] font-bold'>Finestra</h3>
        </div>

        <div className='flex items-center justify-between'>
          {/* Menu */}
          <ul className='flex w-[440px] p-1 bg-[#0B0B0B] dark:bg-gray-800 justify-center rounded-full'>
            <li 
              onClick={() => { setActive('Home'); scrollToSection(refs.Home) }}
              className={`flex gap-x-2 items-center text-[16px] duration-300 cursor-pointer py-2.5 px-3 justify-center hover-scale
                ${active === 'Home' ? 'bg-[#FF5F5F] rounded-full text-white' : 'text-white'}`}
            >
              {active === 'Home' && <TbHome2 className='animate-rotate-in'/>} Home
            </li>

            <li 
              onClick={() => { setActive('About Us'); scrollToSection(refs.About) }}
              className={`flex gap-x-2 items-center text-[16px] duration-300 cursor-pointer py-2.5 px-3 justify-center hover-scale
                ${active === 'About Us' ? 'bg-[#FF5F5F] rounded-full text-white' : 'text-white'}`}
            >
              {active === 'About Us' && <FaUser className='animate-rotate-in'/>} About Us
            </li>

            <li 
              onClick={() => { setActive('Reviews'); scrollToSection(refs.Reviews) }}
              className={`flex gap-x-2 items-center text-[16px] duration-300 cursor-pointer py-2.5 px-3 justify-center hover-scale
                ${active === 'Reviews' ? 'bg-[#FF5F5F] rounded-full text-white' : 'text-white'}`}
            >
              {active === 'Reviews' && <RiChat3Line className='animate-rotate-in'/>} Reviews
            </li>

            <li 
              onClick={() => { setActive('Procedures'); scrollToSection(refs.Transfer) }}
              className={`flex gap-x-2 items-center text-[16px] duration-300 cursor-pointer py-2.5 px-3 justify-center hover-scale
                ${active === 'Procedures' ? 'bg-[#FF5F5F] rounded-full text-white' : 'text-white'}`}
            >
              {active === 'Procedures' && <MdOutlineMedicalServices className='animate-rotate-in'/>} Procedures
            </li>

            <li 
              onClick={() => { setActive('Blog'); scrollToSection(refs.Footer) }}
              className={`flex gap-x-2 items-center text-[16px] duration-300 cursor-pointer py-2.5 px-3 justify-center hover-scale
                ${active === 'Blog' ? 'bg-[#FF5F5F] rounded-full text-white' : 'text-white'}`}
            >
              {active === 'Blog' && <FaNewspaper className='animate-rotate-in'/>} Blog
            </li>
          </ul>

          {/* Right items */}
          <div className="flex items-center gap-x-6 pl-32 py-1">
            <div className="hover-scale">
              <Mode/>
            </div>
            
            <Flex className={`gap-x-2.5 hover-scale`}>
              <div className="w-10 h-10 rounded-full bg-[#000000]/20 dark:bg-white/20 overflow-hidden relative">
                <div className="absolute left-0 top-0 w-[4px] h-full bg-[#F2F2F4] dark:bg-gray-700 progress-animate"></div>
              </div>
              <Flex className={`gap-x-[7px]`}>
                <span className='text-TextColor dark:text-white text-[16px]'>+pro </span> 
                <span className='w-6 h-6 text-[16px] rounded-full border-2 border-black dark:border-white font-bold text-center animate-spin-slow'>$</span>
              </Flex>
            </Flex>

            <button className='px-7.5 py-[11px] rounded-[52px] border-2 border-[#D1D5DB] dark:border-gray-600 text-TextColor dark:text-white hover-border-glow button-press'>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header