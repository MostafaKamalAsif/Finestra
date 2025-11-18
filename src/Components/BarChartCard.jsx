import React from "react";
import Flex from "./Flex";
import Switch from "./Switch";
import ToolTip from "./ToolTip";

const BarChartCard = () => {
  return (
    <>
      <div className="w-[420px] m-auto md:m-0 md:w-[748px] p-1.5 md:p-6 bg-[#F6F6F6]  dark:bg-gray-800 rounded-3xl">
        <Flex className={"flex justify-between gap-x-2 md:gap-x-0"}>
          <div className="">
            <button className="border border-[#FF5F5F] rounded-[82px] text-[13px]  md:text-[16px] font-medium py-2 px-5 md:py-[13px] md:px-11 mb-[170px] text-[#FF5F5F]">
              Learn More
            </button>

            <h3 className="text-TextColor text-[18px] md:text-[28px] font-medium w-[110px] md:w-[183px] leading-[104%]">
              Manage your money wisely
            </h3>
            <p className="pt-3 text-[12px] leading-[130%] text-[#6B7280]">
              Master the Art of Financial Management
            </p>
          </div>

          {/* Bar chart  */}

          <div className="w-[65%] m-auto md:m-0 md:w-[488px] bg-[#FFFFFF] dark:bg-gray-700 rounded-3xl pt-2.5 md:pt-5 px-3 md:px-6 pb-5 md:pb-10">
            <Flex className={"flex justify-between pb-[9px]"}>
              <h3 className="text-[#000000] text-[15px] md:text-[24px] font-medium pl-0.5">
                Expanse Statistic
              </h3>
              <div className="">
                <Switch />
              </div>
            </Flex>
            <div class="border-t-2 border-dashed border-[#E5E7EB] dark:border-[#323232] w-full"></div>

            <div className="relative ">
              <div class="absolute top-[58px] border-t-2 border-dashed border-[#E5E7EB] dark:border-[#323232] w-full"></div>
              <div className={" flex items-end gap-x-4.5"}>
                <div className="w-[74px] h-[68px] bg-[#FDE7CD] rounded-full z-10"></div>
                <div className="w-[74px] h-[83px] bg-[#FDE7CD] rounded-full z-10"></div>

                <div className="w-[74px] h-28 bg-[#FDE7CD] rounded-full z-10"></div>
                <div className="w-[74px] h-[97px] bg-[#FDE7CD] rounded-full z-10"></div>
                <div className="w-[74px] h-[77px] bg-[#FDE7CD] rounded-full z-10"></div>
              </div>
              <div
                class="border-t-2 border-dashed border-[#FEB35F] dark:border-[#D27A1C]/80 w-full"
              ></div>

<div className={" md:hidden flex items-start gap-x-4.5"}>
                <div className="w-[74px] h-[68px] bg-[#F7AF5D] rounded-full z-10"></div>
                <div className="w-[74px] h-[83px] bg-[#F7AF5D] rounded-full z-10"></div>

                <div className="w-[74px] h-28 bg-[#F7AF5D] rounded-full z-10"></div>
                <div className="w-[74px] h-[97px] bg-[#F7AF5D] rounded-full z-10"></div>
                <div className="w-[74px] h-[77px] bg-[#F7AF5D] rounded-full z-10"></div>
              </div>


              <div className="relative hidden md:block">
                <div class="absolute top-[51px] border-t-2 border-dashed border-[#E5E7EB] dark:border-[#323232] w-full"></div>
                <div class="absolute top-[104px] border-t-2 border-dashed border-[#E5E7EB]  dark:border-[#323232] w-full"></div>
                <div className={" items-start flex gap-x-4.5"}>
                  <ToolTip className={"h-[68px]"} />
                  <ToolTip className={"h-[83px]"} />
                  <ToolTip className={"h-28"} />
                  <ToolTip className={"h-[97px]"} />
                  <ToolTip className={"h-[77px]"} />
                </div>
              </div>
            </div>

            {/* Month  */}
            <ul className="flex justify-between pt-2 font-inter text-[12px] text-TextColor">
              <li>Jan</li>
              <li>Feb</li>
              <li>Mar</li>
              <li>Apr</li>
              <li>May</li>
            </ul>
          </div>
        </Flex>
      </div>
    </>
  );
};

export default BarChartCard;
