import React, { useState } from 'react'
import Image from '../Image'
import Logo from '/src/assets/Logo.png'
import { TbHome2 } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa"; 
import Mode from '../Mode';
import Flex from '../Flex';

const Header = () => {
  const [active, setActive] = useState('Home');

  return (
    <>
      <header className='max-w-[1400px] m-auto pt-[13px] pb-3.5 bg-white'>
        <div className="flex justify-between items-center">
          <div>
            <Image imgsrc={Logo} className={'pt-1 pb-0.5'}/>
          </div>

          <div className='flex items-center justify-between'>
            {/* Menu  */}
            <ul className='flex w-[440px] p-1 bg-[#0B0B0B] justify-center rounded-full'>
              <li 
                onClick={() => setActive('Home')}
                className={`flex gap-x-2 items-center text-[16px] duration-300 cursor-pointer  py-2.5 px-3 justify-center
                  ${active === 'Home' ? 'bg-[#FF5F5F] rounded-full text-white' : 'text-white'}`}
              >
                {active === 'Home' && <TbHome2 />} Home
              </li>

              <li 
                onClick={() => setActive('About Us')}
                className={`flex gap-x-2 items-center text-[16px] duration-300 cursor-pointer py-2.5 px-3 justify-center
                  ${active === 'About Us' ? 'bg-[#FF5F5F] rounded-full text-white' : 'text-white'}`}
              >
                {active === 'About Us' && <FaUser />} About Us
              </li>

              <li 
                onClick={() => setActive('Reviews')}
                className={`flex gap-x-2 items-center text-[16px] duration-300 cursor-pointer  py-2.5 px-3 justify-center
                  ${active === 'Reviews' ? 'bg-[#FF5F5F] rounded-full text-white' : 'text-white'}`}
              >
                {active === 'Reviews' && <RiChat3Line />} Reviews
              </li>

              <li 
                onClick={() => setActive('Procedures')}
                className={`flex gap-x-2 items-center text-[16px] duration-300 cursor-pointer  py-2.5 px-3 justify-center
                  ${active === 'Procedures' ? 'bg-[#FF5F5F] rounded-full text-white' : 'text-white'}`}
              >
                {active === 'Procedures' && <MdOutlineMedicalServices />} Procedures
              </li>

               <li 
                onClick={() => setActive('Blog')}
                className={`flex gap-x-2 items-center text-[16px] duration-300 cursor-pointer  py-2.5 px-3 justify-center
                  ${active === 'Blog' ? 'bg-[#FF5F5F] rounded-full text-white' : 'text-white'}`}
              >
                {active === 'Blog' && <FaNewspaper />} Blog
              </li>
            </ul>


            <div className=" flex items-center gap-x-6 pl-32 py-1">
                {/* Light mode and Drack Mode  */}
   <div className="flex items-center gap-2  ">
<Mode/>
</div>

  <Flex className={`gap-x-2.5 `}>
<div className="w-10 h-10 rounded-full bg-[#000000]/20 overflow-hidden relative">
  {/* Left curved highlight */}
  <div className="absolute left-0 top-0 w-[4px] h-full bg-[#F2F2F4]"></div>
</div>


<Flex className={`gap-x-[7px]`}>
  <span className='text-TextColor text-[16px]'>+pro </span> 
  <span className='w-6 h-6 text-[16px] rounded-full border-2 border-black font-bold text-center'>$</span>
</Flex>
  </Flex>

<button className='px-7.5 py-[11px] rounded-[52px] border-2 border-[#D1D5DB] text-TextColor'>
Sign In
</button>




            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
