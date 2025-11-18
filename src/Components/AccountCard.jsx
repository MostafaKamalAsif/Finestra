import React from 'react'
import Flex from './Flex'
import Button from './Button'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import Visa from '/src/assets/Visa.svg'
import Image from './Image';
import Sub from '/src/assets/Subscribe.svg'
import Software from '/src/assets/Softwear.svg'
import RightSoftware from '/src/assets/Software.svg'

const AccountCard = () => {

  return (
   <>
   <div className="w-[400px] md:w-[545px] p-5 md:pt-14 md:pb-14.5 md:px-14 bg-[#EBEBEB] dark:bg-gray-800 rounded-[40px] font-inter scroll-reveal-scale">
    <div className="w-[90%] md:w-[433px] m-auto">
      {/* Connected Account */}
      <div className="bg-[#FFFFFF] dark:bg-gray-700 rounded-2xl p-6 card-hover">
        <Flex className={'flex justify-between gap-x-2 pb-[11px]'}>
          <h4 className='font-medium  md:text-[16px] text-[#000000] dark:text-white'>Connected Account</h4>
          <button className={'text-[#6B7280] dark:text-gray-400 flex items-center gap-x-2 font-medium cursor-pointer hover-slide-right'}>
            View All  
            <MdOutlineKeyboardArrowRight className='text-[16px] md:text-[24px] text-[#282930] dark:text-white arrow-slide'/>
          </button>
        </Flex>

        <div className="bg-[#F6F8FA] dark:bg-gray-600 rounded-lg pt-[13px] hover-lift">
            <Flex className={'flex justify-between pl-3.5 pr-2.5 pb-[15px]'}>
              <h3 className='font-medium text-TextColor dark:text-white'>USD Account</h3>
              <HiOutlineDotsHorizontal className='text-[24px] text-[#282930] dark:text-white icon-spin-hover'/>
            </Flex>
            <hr className='border-3 border-[#FFFFFF] dark:border-gray-500'/>
            <Flex className={'flex pl-3.5 py-3.5 justify-between md:justify-start'}>
              <Image imgsrc={Visa} className="hover-scale"/>
              <div className="md:pl-4 md:pr-[54px]">
                  <h3 className='font-medium text-TextColor dark:text-white md:text-[16px]'>Visa</h3>
                  <p className='font-semibold text-[8px] md:text-[12px] text-[#6B7280] dark:text-gray-400'>*** *** *** *** 1990</p>
              </div>
              <h3 className='text:[15px] pr-1 md:pr-0 md:text-xl text-TextColor dark:text-white font-medium animate-pulse'>$28,390.20</h3>
            </Flex>
        </div>
      </div>

      {/* Expense Breakdown */}
      <div className="bg-[#FFFFFF] dark:bg-gray-700 rounded-2xl p-6 mt-2 card-hover">
          <Flex className={'justify-between flex gap-x-2 pb-[35px]'}>
            <h4 className='font-medium text-[16px] text-[#000000] dark:text-white'>Expense Breakdown</h4>
            <HiOutlineDotsHorizontal className='text-[24px] text-[#282930] dark:text-white icon-spin-hover'/>
          </Flex>

          <Flex className={'flex'}>
              <div className="border-l-2 border-dashed border-[#D1D5DB] dark:border-gray-600 h-[103px]"></div>
              <div className="w-[174px] hover-scale">
                  <div className="pl-[13px] pb-2.5">
                      <h3 className='text-[12px] font-medium text-[#6B7280] dark:text-gray-400'>Software</h3>
                      <span className='font-medium text-[#000000] dark:text-white pt-1.5'>32%</span>
                  </div>
                  <Image imgsrc={Sub} className={'px-1'}/>
              </div>

              <div className="border-l-2 border-dashed border-[#D1D5DB] dark:border-gray-600 h-[103px]"></div>
              <div className="hover-scale">
                  <div className="pl-[13px] pb-2.5">
                      <h3 className='text-[12px] font-medium text-[#6B7280] dark:text-gray-400'>Software</h3>
                      <span className='font-medium text-[#000000] dark:text-white pt-1.5'>24.8%</span>
                  </div>
                  <Image imgsrc={Software} className={'px-1'}/>
              </div>

              <div className="border-l-2 border-dashed border-[#D1D5DB] dark:border-gray-600 h-[103px]"></div>
              <div className="hover-scale">
                  <div className="pl-[13px] pb-2.5">
                      <h3 className='text-[12px] font-medium text-[#6B7280] dark:text-gray-400'>Subscriptions</h3>
                      <span className='font-medium text-[#000000] dark:text-white pt-1.5'>65.8%</span>
                  </div>
                  <Image imgsrc={RightSoftware} className={'px-1 w-full h-10 md:h-full'}/>
              </div>
          </Flex>
      </div>
    </div>
   </div>
   </>
  )
}

export default AccountCard