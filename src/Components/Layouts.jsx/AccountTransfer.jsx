import React from "react";
import Flex from "../Flex";
import { TbLayoutGrid } from "react-icons/tb";
import { HiOutlineGift } from "react-icons/hi";
import Button from "../Button";
import ClientsCard from "../ClientsCard";
import { HiUsers } from "react-icons/hi2";
import { FaRegLifeRing } from "react-icons/fa";
import { HiViewColumns } from "react-icons/hi2";
import AccountCard from "../AccountCard";
import Container from "../Container";
const AccountTransfer = () => {
  return (
    <>
      <div className="my-3.5 ">
        <Container>
        <div className="pt-16 pb-[100px] px-2.5 md:pt-32 md:pb-[140px] md:px-[106px] bg-[#F8F8F8] dark:bg-[#1A1A1A]  m-auto rounded-3xl">
          {/* Account transfer  */}
          <Flex className={"gap-x-[100px] md:flex-wrap lg:flex-nowrap max-w-[1188px] md:pb-[100px]"}>
            <div className="w-[545px]">
              <AccountCard />
            </div>

            <div className="mt-4">
              <h4
                className="text-[#0E0E0E] font-medium py-1.5 px-3 bg-[#FF5F5F]/12 dark:bg-[#FF5F5F]/70
 rounded-[80px] w-fit"
              >
                Account Transfer
              </h4>
              <h2 className="text-TextColor text-center md:text-start text-3xl md:text-5xl lg::text-[63px] font-bold leading-[100%] pt-7 pb-[31px] capitalize md:w-[545px] ">
                {" "}
                Maximizing Efficiency in Daily Finance
              </h2>
              <p className="text-[#6B7280] text-center md:text-start md:text-[18px] font-medium leading-[150%] pr-4 pb-[58px] md:w-[467px]">
                See your whole financial picture in one place, alongside a
                smarter approach to investing and real human.
              </p>

              <Flex
                className={
                  "flex justify-between md:justify-start md:gap-x-[108px]"
                }
              >
                <div className="flex items-center gap-x-3 ">
                  <div className="p-3 border border-[#EDEDED] rounded-full">
                    <TbLayoutGrid className=" text-[#1C3F3A] text-[24px]" />
                  </div>
                  <div className="p-3 border border-[#EDEDED] rounded-full">
                    <HiOutlineGift className=" text-[#1C3F3A] text-[24px]" />
                  </div>
                </div>
                <Button
                  className={
                    "px-4 py-3.5 font-medium w-fit bg-[#FF5F5F] rounded-[82px] cursor-pointer"
                  }
                >
                  Learn More
                </Button>
              </Flex>
            </div>
          </Flex>

          {/* Key Reasons to Choose Us  */}
          <Flex className={"justify-between max-w-[1202px] m-auto pt-12 md:pt-0 pb-[65px]"}>
            <h2 className="text-TextColor text-4xl md:text-[40px] lg:text-[72px] font-bold leading-[100%] capitalize md:w-[600px]">
              Key Reasons to Choose Us
            </h2>
            <p className="w-[363px] pt-2 md:pt-0  lg:text-[18px] font-medium text-[#6B7280]">
              Whatever your customers' payment preferences, we’ll help you find
              the right solution for your business.
            </p>
          </Flex>

          {/* Clints card  */}
          <div className="max-w-[1188px] m-auto">
          <Flex className={" flex-wrap gap-y-5  justify-between"}>
            <ClientsCard
              numbers={"20"}
              ratio={"K"}
              more={"+"}
              Feedback={
                "In 38 countries, we work as one global team to help clients"
              }
            >
              <HiUsers className="text-[24px]" />
              <span className="text-[18px]">Customers</span>
            </ClientsCard>
            <div class="border-l-2 hidden md:block border-dashed border-TextColor h-[161px]"></div>

            <ClientsCard
              numbers={"98"}
              ratio={"%"}
              Feedback={
                "In 38 countries, we work as one global team to help clients"
              }
            >
              <FaRegLifeRing className="text-[24px]" />
              <span className="text-[18px]">Impact</span>
            </ClientsCard>
            <div class="border-l-2 hidden md:block border-dashed border-TextColor h-[161px]"></div>
            <ClientsCard
              numbers={"89"}
              ratio={"%"}
              Feedback={
                "In 38 countries, we work as one global team to help clients"
              }
            >
              <HiViewColumns className="text-[24px]" />
              <span className="text-[18px]">Experience</span>
            </ClientsCard>
          </Flex>
          </div>
        </div>
        </Container>
      </div>
    </>
  );
};

export default AccountTransfer;
