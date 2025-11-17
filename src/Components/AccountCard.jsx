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
   <div className="w-[545px] pt-14 pb-14.5 px-14 bg-[#EBEBEB] rounded-[40px] font-inter">
    <div className="w-[433px]  ">
      {/* Conntected  Account  */}
      <div className="bg-[#FFFFFF] rounded-2xl p-6">
        <Flex className={'justify-between gap-x-2 pb-[11px]'}>
<h4 className=' font-medium text-[16px] text-[#000000]'>Connected Account</h4>
<button className={'text-[#6B7280]  flex items-center gap-x-2 font-medium cursor-pointer'}>View All  <MdOutlineKeyboardArrowRight className='text-[24px] text-[#282930]'/> </button>


        </Flex>

        <div className="bg-[#F6F8FA] rounded-lg pt-[13px] ">

            <Flex className={'justify-between pl-3.5 pr-2.5 pb-[15px]'}>
 <h3 className=' font-medium  text-TextColor'>USD Account</h3>
 <HiOutlineDotsHorizontal className='text-[24px] text-[#282930]'/>
            </Flex>
           <hr  className='border-3 border-[#FFFFFF]'/>
           <Flex className={'pl-3.5 py-3.5'}>
            <Image imgsrc={Visa}/>
            <div className=" pl-4 pr-[54px]">
                <h3 className='font-medium text-TextColor text-[16px]'>Visa</h3>
                <p className='font-semibold text-[12px] text-[#6B7280]' >*** *** *** *** 1990</p>
            </div>
            <h3 className='text-xl text-TextColor font-medium'>$28,390.20</h3>
           </Flex>
        </div>
</div>

{/* Expense Breakdown  */}
<div className="bg-[#FFFFFF] rounded-2xl p-6 mt-2">
    <Flex className={'justify-between gap-x-2 pb-[35px]'}>
<h4 className=' font-medium text-[16px] text-[#000000]'>Expense Breakdown </h4>
 <HiOutlineDotsHorizontal className='text-[24px] text-[#282930]'/>
        </Flex>

        <Flex>
            <div class="border-l-2 border-dashed border-[#D1D5DB] h-[103px]"></div>
            <div className="w-[174px]">
                <div className="pl-[13px]  pb-2.5">
                    <h3 className='text-[12px] font-medium text-[#6B7280]'>Software</h3>
<span className='font-medium text-[#000000] pt-1.5'>32%</span>
                </div>

<Image imgsrc={Sub} className={'px-1'}/>

            </div>

             <div class="border-l-2 border-dashed border-[#D1D5DB] h-[103px]"></div>
            <div className="">
                <div className="pl-[13px]  pb-2.5">
                    <h3 className='text-[12px] font-medium text-[#6B7280]'>Software</h3>
<span className='font-medium text-[#000000] pt-1.5'>24.8%</span>
                </div>

<Image imgsrc={Software} className={'px-1'}/>

            </div>


             <div class="border-l-2 border-dashed border-[#D1D5DB] h-[103px]"></div>
            <div className="">
                <div className="pl-[13px]  pb-2.5">
                    <h3 className='text-[12px] font-medium text-[#6B7280]'>Subscriptions</h3>
<span className='font-medium text-[#000000] pt-1.5'>65.8%</span>
                </div>

<Image imgsrc={RightSoftware} className={'px-1'}/>

            </div>


        </Flex>
</div>
    </div>
   </div>
   </>
  )
}

export default AccountCard       