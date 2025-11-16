import React from 'react'
import Flex from '../Flex'
import Button from '../Button'
import { VscPlayCircle } from "react-icons/vsc";
import { FaStar } from "react-icons/fa";

const Banner = () => {
  return (
    <>
    <div className="px-5 pb-7.5">
    <div className="bg-[url(/src/assets/Banner.svg)] bg-center bg-cover bg-no-repeat pt-[88px] pb-[536px] rounded-4xl">
    
    <h1 className='w-[900px] m-auto text-[100px]  leading-[100%] text-center font-medium text-TextColor '>Make Your Money Work Harder</h1>
    <p className='w-[566px] m-auto text-center text-TextColor pt-8 pb-[39px] leading-[26px]'>Initiating a business venture may appear overwhelming, yet our forte lies in simplifying the entire process for you.</p>
{/* Button  */}
    <Flex className={`gap-x-4 justify-center pb-6`}>
        <Button className={` py-3.5 px-5 rounded-[66px] bg-[#000000] border cursor-pointer  hover:text-TextColor hover:bg-transparent duration-300`} >Get Started Free</Button>
        <Button className={` py-3.5 px-5 rounded-[46px] bg-[#000000] flex items-center gap-x-2.5 border cursor-pointer hover:text-TextColor hover:bg-transparent duration-300`} ><VscPlayCircle className=' w-6  h-6'/> Watch A Demo </Button>
    </Flex>

{/* star rating  */}
<Flex className={'justify-center gap-x-5 pb-7.5'}>
    
    <Flex className={'gap-x-1'}>
<FaStar className='w-[31px] h-[31px] text-[#FF5F5F]'/>
<span className=' text-[18px] text-TextColor font-inter font-medium'>Trustpilot</span>
    </Flex>

   <Flex  className={`gap-x-0.5`}>
    <Flex className={'gap-x-1'}>
<FaStar className='w-5 h-5 text-[#FF5F5F]'/>
<FaStar className='w-5 h-5 text-[#FF5F5F]'/>
<FaStar className='w-5 h-5 text-[#FF5F5F]'/>
<FaStar className='w-5 h-5 text-[#FF5F5F]'/>
<FaStar className='w-5 h-5 text-[#FF5F5F]'/>
<span className='text-[16px] text-TextColor font-inter font-medium'>3800+ 5 Stars</span>
    </Flex>
   </Flex>

</Flex>

    </div>
    </div>
    </>
  )
}

export default Banner