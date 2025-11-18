import React, { useState } from 'react'
import Image from '../Image'
import Logo from '/src/assets/Logo.svg'
import { TbHome2 } from "react-icons/tb";
import { FaUser, FaNewspaper } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { MdOutlineMedicalServices } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import Mode from '../Mode';
import Flex from '../Flex';

const Header = ({ scrollToSection, refs }) => {
  const [active, setActive] = useState('Home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: 'Home', icon: <TbHome2 />, ref: refs.Home },
    { name: 'About Us', icon: <FaUser />, ref: refs.About },
    { name: 'Reviews', icon: <RiChat3Line />, ref: refs.Reviews },
    { name: 'Procedures', icon: <MdOutlineMedicalServices />, ref: refs.Transfer },
    { name: 'Blog', icon: <FaNewspaper />, ref: refs.Footer }
  ];

  const handleClick = (item) => {
    setActive(item.name);
    scrollToSection(item.ref);
    setMobileMenuOpen(false);
  };

  return (
    <header className='bg-white dark:bg-gray-900 animate-fade-in-down sticky top-0 z-50'>
      <div className="flex max-w-[520px] md:max-w-[680px] lg:max-w-[1400px] m-auto pt-[13px] pb-3.5 px-4 md:px-6 lg:px-8 justify-between items-center">
        {/* Logo */}
        <div className='flex items-center gap-x-[9px]'>
          <Image imgsrc={Logo} className={'pt-1 pb-0.5 hover-scale'} />
          <h3 className='text-TextColor text-[20px] md:text-[24px] font-bold'>Finestra</h3>
        </div>

        {/* Desktop Menu */}
        <div className='hidden lg:flex items-center justify-between'>
          <ul className='flex w-[440px] p-1 bg-[#0B0B0B] dark:bg-gray-800 justify-center rounded-full'>
            {menuItems.map((item) => (
              <li
                key={item.name}
                onClick={() => handleClick(item)}
                className={`flex gap-x-2 items-center text-[16px] duration-300 cursor-pointer py-2.5 px-3 justify-center hover-scale
                  ${active === item.name ? 'bg-[#FF5F5F] rounded-full text-white' : 'text-white'}`}
              >
                {active === item.name && React.cloneElement(item.icon, { className: 'animate-rotate-in' })} {item.name}
              </li>
            ))}
          </ul>

          {/* Right Items */}
          <div className="flex items-center gap-x-6 pl-32 py-1">
            <Mode />
            <Flex className={`gap-x-2.5 hover-scale`}>
              <div className="w-10 h-10 rounded-full bg-[#000000]/20 dark:bg-white/20 overflow-hidden relative">
                <div className="absolute left-0 top-0 w-[4px] h-full bg-[#F2F2F4] dark:bg-gray-700 "></div>
              </div>
              <Flex className={`flex gap-x-[7px]`}>
                <span className='text-TextColor dark:text-white text-[16px]'>+pro </span> 
                <span className='w-6 h-6 text-[16px] rounded-full border-2 border-black dark:border-white font-medium text-center '>$</span>
              </Flex>
            </Flex>
            <button className='px-7.5 py-[11px] rounded-[52px] border-2 border-[#D1D5DB] dark:border-gray-600 text-TextColor dark:text-white hover-border-glow button-press'>
              Sign In
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex lg:hidden items-center gap-x-3 md:gap-x-4">
          <Mode />
          <button className='hidden md:block px-4 md:px-6 py-2 md:py-[11px] rounded-[52px] border-2 border-[#D1D5DB] dark:border-gray-600 text-TextColor dark:text-white text-sm md:text-base hover-border-glow button-press'>
            Sign In
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-TextColor cursor-pointer dark:text-white text-3xl hover-scale">
            {mobileMenuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-[#0B0B0B] dark:bg-gray-800 mx-4 mb-4 rounded-3xl p-4 animate-fade-in-down">
          <ul className='flex flex-col gap-y-2'>
            {menuItems.map(item => (
              <li
                key={item.name}
                onClick={() => handleClick(item)}
                className={`flex gap-x-3 items-center text-[16px] duration-300 cursor-pointer py-3 px-4 rounded-full hover-scale
                  ${active === item.name ? 'bg-[#FF5F5F] text-white' : 'text-white'}`}
              >
                {item.icon} {item.name}
              </li>
            ))}
          </ul>

          {/* Mobile Footer */}
          <div className="mt-4 pt-4 border-t border-gray-700 flex flex-col gap-y-3">
            <Flex className={`gap-x-2.5 justify-center`}>
              <div className="w-10 h-10 rounded-full bg-white/20 overflow-hidden relative">
                <div className="absolute left-0 top-0 w-[4px] h-full bg-gray-400 progress-animate"></div>
              </div>
              <Flex className={`gap-x-[7px]`}>
                <span className='text-white text-[16px]'>+pro </span> 
                <span className='w-6 h-6 text-[16px] rounded-full border-2 border-white font-bold text-center text-white'>$</span>
              </Flex>
            </Flex>
            <button className='md:hidden w-full py-3 rounded-full border-2 border-gray-600 text-white hover-border-glow button-press'>
              Sign In
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
