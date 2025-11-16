import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { MdArrowOutward } from "react-icons/md";
const Footer = () => {
  return (
    <>
    <div className="bg-[url(/src/assets/Footer.svg)] bg-center bg-cover bg-no-repeat pt-[86px] pb-[46px] rounded-4xl">
    
    <Container>
        <Flex className={'justify-between '}>
            <h2 className='text-[80px] font-medium text-TextColor '>Let’s Sit &Talk</h2>
            <div className="w-[469px] ">
                <input type="email" placeholder='Enter Your Email' className='placeholder:text-[40px] text-[40px]   w-full  pb-9.5 outline-none border-b border-b-[#1F2937]'/>

            </div>
            
        </Flex>
    </Container>
    </div>
    </>
  )
}

export default Footer