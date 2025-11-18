import React, { useState } from "react";
import { HiOutlinePresentationChartLine } from "react-icons/hi";
import { HiOutlineChartBarSquare } from "react-icons/hi2";
const Switch = () => {
  const [active, setActive] = useState("bar");

  return (
    <div className="flex items-center font-inter w-[100px] md:w-[153px] h-6 md:h-11 bg-[#F6F6F6] dark:bg-gray-600 rounded-full p-1">

      {/* Bar Chart */}
      <button
        onClick={() => setActive("bar")}
        className={`
          flex items-center justify-center gap-1 w-[64%] h-full text-[8px] md:text-[10px] 
          rounded-full dark:text-black
          ${active === "bar" ? "bg-white shadow " : ""}
        `}
      >
        <HiOutlineChartBarSquare className="w-3.5 h-3.5 text-SecondryColor dark:text-black"/>
        {active === "bar" && 'Bar chart '  }
    
      </button>

      {/* Presentation */}
      <button
        onClick={() => setActive("presentation")}
        className={`
          flex items-center justify-center w-[36%] h-full rounded-full
          ${active === "presentation" ? "bg-white shadow" : ""}
        `}
      >
        <HiOutlinePresentationChartLine className="w-3.5 h-3.5 text-SecondryColor  dark:text-black"/>
      
        
      </button>

    </div>
  );
};

export default Switch;
