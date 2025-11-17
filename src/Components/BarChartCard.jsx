import React from 'react'
import Flex from './Flex'
import Switch from './Switch'

const BarChartCard = () => {
  return (
    <>
    <div className="w-[748px] p-6 bg-[#F6F6F6] rounded-3xl">
        <Flex>
            <div className="">
            <button className='border border-[#FF5F5F] rounded-[82px] text-[16px] font-medium py-[13px] px-11 mb-[170px] text-[#FF5F5F]'>Learn More</button>
            
                <h3 className='text-TextColor text-[28px] font-medium w-[183px] leading-[104%]'>Manage your money wisely </h3>
            <p className='pt-3 w-[173px] leading-[130%] text-[#6B7280]'>Master the Art of Financial Management</p>
            </div>

            {/* Bar chart  */}

            <div className="w-[488px] bg-[#FFFFFF] rounded-3xl pt-5 px-6 pb-10">
                <Flex className={'justify-between pb-[9px]'}>
                    <h3 className='text-[#000000] text-[24px] font-medium pl-0.5'>Expanse Statistic</h3>
                    <div className=""><Switch/></div>
                    
                </Flex>
        <div class="border-t-2 border-dashed border-[#E5E7EB] w-full"></div>

        <div className="relative">
            <div class="absolute top-[58px] border-t-2 border-dashed border-[#E5E7EB] w-full"></div>
            <div className={' flex items-end gap-x-4.5'}>
                <div className="w-[74px] h-[68px] bg-[#FDE7CD] rounded-full z-10"></div>
                <div className="w-[74px] h-[83px] bg-[#FDE7CD] rounded-full z-10"></div>

                <div className="w-[74px] h-28 bg-[#FDE7CD] rounded-full z-10"></div>
                <div className="w-[74px] h-[97px] bg-[#FDE7CD] rounded-full z-10"></div>
                <div className="w-[74px] h-[77px] bg-[#FDE7CD] rounded-full z-10"></div>

            </div>
        <div class="border-t-2 border-dashed border-[#FEB35F] w-full"></div>
        <div className="relative">
             <div class="absolute top-[51px] border-t-2 border-dashed border-[#E5E7EB] w-full"></div>
             <div class="absolute top-[104px] border-t-2 border-dashed border-[#E5E7EB] w-full"></div>
  <div className={'items-start flex gap-x-4.5'}>
                <div className="w-[74px] h-[68px] bg-[#F7AF5D] rounded-full z-10 "></div>
                <div className="w-[74px] h-[83px] bg-[#F7AF5D] rounded-full z-10"></div>
                <div className="w-[74px] h-28 bg-[#F7AF5D] rounded-full z-10"></div>
                <div className="w-[74px] h-[97px] bg-[#F7AF5D] rounded-full z-10"></div>
                <div className="w-[74px] h-[77px] bg-[#F7AF5D] rounded-full z-10"></div>

            </div>
            </div>
        </div>

        {/* Month  */}
<ul className='flex justify-between pt-2 font-inter text-[12px] text-TextColor'>
    <li >Jan</li>
    <li >Feb</li>
    <li >Mar</li>
    <li >Apr</li>
    <li >May</li>
</ul>
            </div>
            
        </Flex>
    </div>
    {/* Hover  */}
    <div className="w-[117px] bg-[#FFFFFF] rounded-lg p-2 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)]">
        <h4 className='font-medium text-[16px] text-[#000000] pb-1 leading-[130%]'>73,901</h4>
        <Flex className={'gap-x-[2.5px]'}>
            <div className="w-2 h-2 bg-[#FDE7CD] rounded-xs"></div>
            <span className='text-[#374151] text-[10px]'>Current Income</span>
        </Flex>
        <Flex className={'gap-x-[2.5px] pt-4 pb-1'}>
            <div className="w-2 h-2 bg-[#F7AF5D] rounded-xs"></div>
            <span className='text-[#374151] text-[10px]'>Current Experience</span>
        </Flex>
        <h4 className='font-medium text-[16px] text-[#000000] leading-[130%] '>98,032</h4>
    </div>
    </>
  )
}

export default BarChartCard