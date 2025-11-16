import React, { useState } from 'react'
import Image from '../Image'
import Logo from '/src/assets/Logo.png'
import { TbHome2 } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { RiChat3Line } from "react-icons/ri";
import { MdOutlineMedicalServices } from "react-icons/md";
import { FaNewspaper } from "react-icons/fa"; 
import { IoIosSunny } from "react-icons/io";
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
            <ul className='flex w-[468px] p-1 bg-[#0B0B0B] rounded-full'>
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

            <div className="">
                {/* Light mode and Drack Mode  */}
   <div className="flex items-center gap-2">

  <label className="relative inline-flex items-center cursor-pointer">
    <input type="checkbox" className="sr-only peer" />
    <div className="w-12 h-6 bg-gray-300 dark:bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:bg-[#FF5F5F] transition-colors"> </div>
    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow-md peer-checked:translate-x-6 transition-transform"></div>
  </label>

</div>


            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
