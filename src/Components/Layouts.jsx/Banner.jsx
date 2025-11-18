import React from 'react'
import Flex from '../Flex'
import Button from '../Button'
import { VscPlayCircle } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";

const Banner = () => {
  return (
    <>
    <div className="px-5 pb-7.5 ">
    <div className="bg-[url(/src/assets/Banner.svg)] bg-center bg-cover bg-no-repeat 
                      pt-12 sm:pt-16 md:pt-20 lg:pt-[88px] 
                      pb-[250px] sm:pb-[350px] md:pb-[450px] lg:pb-[536px] 
                      rounded-2xl sm:rounded-3xl lg:rounded-4xl 
                      dark:invert max-w-[520px] md:max-w-[680px] lg:max-w-[1400px] m-auto ">
    
    {/* Heading with fade-in animation */}
    <h1 className='md:w-[900px] md:m-auto text-[40px]  md:text-[100px] leading-[100%] text-center font-medium text-TextColor  animate-fade-in-up dark:text-[#08080C]'>
      Make Your Money Work Harder
    </h1>

    {/* Description with delayed animation */}
    <p className='md:w-[566px] m-auto text-center text-TextColor  pt-8 pb-[39px] leading-[26px] animate-fade-in-up animate-delay-200 dark:text-[#08080C]'>
      Initiating a business venture may appear overwhelming, yet our forte lies in simplifying the entire process for you.
    </p>

    {/* Buttons with animations and hover effects */}
    <Flex className={`gap-x-4 flex justify-center pb-6 animate-fade-in-up animate-delay-400`}>
        <Button className={`py-3.5 px-5 rounded-[66px] bg-[#000000]  border cursor-pointer hover:bg-transparent duration-300 hover:text-[#08080C] hover:border-[#08080C] hover-scale button-press`}>
          Get Started Free
        </Button>
        <Button className={`py-3.5 px-5 rounded-[46px] bg-[#000000] flex items-center gap-x-2.5 border cursor-pointer hover-scale button-press hover:bg-transparent duration-300 hover:text-[#08080C] hover:border-[#08080C]`}>
          <VscPlayCircle className='md:w-6 md:h-6 w-4 h-4'/> 
          Watch A Demo 
        </Button>
    </Flex>

    {/* Star rating with stagger animations */}
    <Flex className={'flex justify-center gap-x-5 mb-17 md:pb-7.5 animate-fade-in-up animate-delay-600'}>
        <Flex className={'flex gap-x-1'}>
          <FaStar className='w-[25px] w-[25px] md:w-[31px] md:h-[31px] text-[#FF5F5F] dark:text-[#00A0A0]  hover-scale'/>
          <span className='text-[16px] md:text-[18px] text-TextColor dark:text-[#08080C] font-inter font-medium'>Trustpilot</span>
        </Flex>

        <Flex className={`flex gap-x-0.5`}>
          <Flex className={ 'flex gap-x-1'}>
            <FaStar className='w-4 h-4 md:w-5 md:h-5 text-[#FF5F5F] dark:text-[#00A0A0] animate-bounce-in animate-delay-800 hover-scale'/>
            <FaStar className='w-4 h-4 md:w-5 md:h-5 text-[#FF5F5F] dark:text-[#00A0A0] animate-bounce-in animate-delay-800 hover-scale'/>
            <FaStar className='w-4 h-4 md:w-5 md:h-5 text-[#FF5F5F] dark:text-[#00A0A0] animate-bounce-in animate-delay-800 hover-scale'/>
            <FaStar className='w-4 h-4 md:w-5 md:h-5 text-[#FF5F5F] dark:text-[#00A0A0] animate-bounce-in animate-delay-800 hover-scale'/>
            <FaStar className='w-4 h-4 md:w-5 md:h-5 text-[#FF5F5F] dark:text-[#00A0A0] animate-bounce-in animate-delay-800 hover-scale'/>
       
            <span className='text-[14px] md:text-[16px] text-TextColor dark:text-[#08080C] font-inter font-medium'>3800+ 5 Stars</span>
          </Flex>
        </Flex>
    </Flex>

    </div>
    </div>
    </>
  )
}

export default Banner