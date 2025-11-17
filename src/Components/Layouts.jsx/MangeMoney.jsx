import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Button from '../Button'
import BarChartCard from '../BarChartCard'

const MangeMoney = () => {
  return (
    <>
    <div className="py-[92px]">
        <Container>
            <Flex className={'items-end'}>
                <div className="w-[649px]">
                    <h2 className='text-[72px] font-medium leading-[100%] pr-40  text-TextColor '>Manage Money Wisely</h2>
                    <p className='text-[#6B7280] text-[18px] font-medium leading-[170%] pt-6 '>Master the Art of Financial Management: Strategies and Tools to Optimize Your Budget, Build Wealth, and Secure a Stable Financial Future</p>
                </div>

                <div className=" ms-auto">
                     <Button className={` py-3.5 px-5 rounded-[66px] bg-[#000000] border cursor-pointer  hover:text-TextColor hover:bg-transparent duration-300`} >Get Started Free</Button>
                     <p className='text-[#6B7280] text-[16px] font-medium pt-[9px]'>explore more about us</p>
                </div>
            </Flex>

            <Flex>
              <BarChartCard/>
            </Flex>
        </Container>
    </div>
    </>
  )
}

export default MangeMoney