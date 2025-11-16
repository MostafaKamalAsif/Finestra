import React, { useState } from 'react'
import { IoIosSunny } from "react-icons/io";
import { IoMoonSharp } from "react-icons/io5";
const Mode = () => {
      const [darkMode, setDarkMode] = useState(false);
  return (
    <>
   <label className="relative inline-flex items-center cursor-pointer w-[50px] h-[22px] ">
        {/* Hidden checkbox */}
        <input
          type="checkbox"
          className="sr-only peer"
          checked={!darkMode} // invert logic
          onChange={() => setDarkMode(!darkMode)}
        />

        {/* Background track */}
        <div className="w-[43px] h-[22px] m-auto bg-[#FFFFFF] border-2 border-[#D1D5DB] rounded-full transition-colors"></div>

        {/* Knob */}
        <div
          className={`absolute top-[3px] left-1 right-[3px] bottom-[3px] w-4 h-4 bg-[#FF5F5F]  rounded-full transition-transform flex items-center justify-center text-white ${
            darkMode ? "left-0" : "translate-x-6 left-0"
          }`}
        >
          {darkMode ? <IoMoonSharp className="text-xs" /> : <IoIosSunny className="text-xs" />}
        </div>
      </label>
    </>
  )
}

export default Mode