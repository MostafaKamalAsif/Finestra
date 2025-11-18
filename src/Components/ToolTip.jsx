import React from 'react'
import Flex from './Flex'

const ToolTip = ({className}) => {
  return (
    <>
     <div className="relative group flex justify-center">
  
  {/* Your Bar */}
 
    <div className={`w-[74px]  bg-[#F7AF5D] rounded-full z-10 ${className}`}></div>
  
  

  {/* Tooltip */}
  <div className="absolute
      bottom-[70%]
      left-1/2 w-3.5 h-3.5 bg-white rounded-full z-100 opacity-0
      group-hover:opacity-100
      group-hover:-translate-y-1 duration-300"></div>
  <div
    className="z-100
      absolute
      bottom-[80%]
      left-[55%]
    
      opacity-0
      group-hover:opacity-100
      group-hover:-translate-y-1
      transition-all
      duration-300
      pointer-events-none
      w-[117px]
      bg-white
      rounded-lg
      p-2
      shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]
    "
  >
    <h4 className="font-medium text-[16px] text-black pb-1 leading-[130%]">
      73,901
    </h4>

    <Flex className="gap-x-[2.5px]">
      <div className="w-2 h-2 bg-[#FDE7CD] rounded-xs"></div>
      <span className="text-[#374151] text-[10px]">Current Income</span>
    </Flex>

    <Flex className="gap-x-[2.5px] pt-4 pb-1">
      <div className="w-2 h-2 bg-[#F7AF5D] rounded-xs"></div>
      <span className="text-[#374151] text-[10px]">Current Experience</span>
    </Flex>

    <h4 className="font-medium text-[16px] text-black leading-[130%]">
      98,032
    </h4>
  </div>

</div>
    </>
  )
}

export default ToolTip