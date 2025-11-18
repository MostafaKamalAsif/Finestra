import React from 'react'
import Flex from '../Flex'
import Button from '../Button'
import { VscPlayCircle } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";

const Banner = () => {
  return (
    <>
    <div className="px-5 pb-7.5">
    <div className="bg-[url(/src/assets/Banner.svg)] bg-center bg-cover bg-no-repeat pt-[88px] pb-[536px] rounded-4xl dark:invert">
    
    {/* Heading with fade-in animation */}
    <h1 className='w-[900px] m-auto text-[100px] leading-[100%] text-center font-medium text-TextColor  animate-fade-in-up dark:text-[#08080C]'>
      Make Your Money Work Harder
    </h1>

    {/* Description with delayed animation */}
    <p className='w-[566px] m-auto text-center text-TextColor  pt-8 pb-[39px] leading-[26px] animate-fade-in-up animate-delay-200 dark:text-[#08080C]'>
      Initiating a business venture may appear overwhelming, yet our forte lies in simplifying the entire process for you.
    </p>

    {/* Buttons with animations and hover effects */}
    <Flex className={`gap-x-4 justify-center pb-6 animate-fade-in-up animate-delay-400`}>
        <Button className={`py-3.5 px-5 rounded-[66px] bg-[#000000]  border cursor-pointer hover:bg-transparent duration-300 hover:text-[#08080C] hover:border-[#08080C] hover-scale button-press`}>
          Get Started Free
        </Button>
        <Button className={`py-3.5 px-5 rounded-[46px] bg-[#000000] flex items-center gap-x-2.5 border cursor-pointer hover-scale button-press hover:bg-transparent duration-300 hover:text-[#08080C] hover:border-[#08080C]`}>
          <VscPlayCircle className='w-6 h-6'/> 
          Watch A Demo 
        </Button>
    </Flex>

    {/* Star rating with stagger animations */}
    <Flex className={'justify-center gap-x-5 pb-7.5 animate-fade-in-up animate-delay-600'}>
        <Flex className={'gap-x-1'}>
          <FaStar className='w-[31px] h-[31px] text-[#FF5F5F] hover-scale'/>
          <span className='text-[18px] text-TextColor dark:text-[#08080C] font-inter font-medium'>Trustpilot</span>
        </Flex>

        <Flex className={`gap-x-0.5`}>
          <Flex className={'gap-x-1'}>
            <FaStar className='w-5 h-5 text-[#FF5F5F] animate-bounce-in animate-delay-800 hover-scale'/>
            <FaStar className='w-5 h-5 text-[#FF5F5F] animate-bounce-in animate-delay-900 hover-scale'/>
            <FaStar className='w-5 h-5 text-[#FF5F5F] animate-bounce-in animate-delay-1000 hover-scale'/>
            <FaStar className='w-5 h-5 text-[#FF5F5F] animate-bounce-in animate-delay-1000 hover-scale'/>
            <FaStar className='w-5 h-5 text-[#FF5F5F] animate-bounce-in animate-delay-1000 hover-scale'/>
            <span className='text-[16px] text-TextColor dark:text-[#08080C] font-inter font-medium'>3800+ 5 Stars</span>
          </Flex>
        </Flex>
    </Flex>

    </div>
    </div>
    </>
  )
}

export default Banner