import React from "react";
import Container from "../Container";
import Flex from "../Flex";
import ReviewCard from "../ReviewCard";

const Review = () => {
  return (
    <>
      <div className="bg-[url(/src/assets/ReviewBanner.svg)] bg-center bg-cover bg-no-repeat pt-28 pb-[103px]">
        <Container>
          <Flex className={"justify-center gap-x-[52.5px]"}>
            <span className="text-[#344054] text-[18px] font-medium">
              Our Customers
            </span>
            <span className="text-[#344054] text-[18px] font-medium">
              Talk About IT
            </span>
            <span className="text-[#344054] text-[18px] font-medium">
              Better Than Us
            </span>
          </Flex>
          <div className="w-[687px] m-auto text-center pt-8 pb-[53px]">
            <h2 className="text-TextColor text-[72px] font-medium leading-[100%] capitalize ">
              Hear What Customer Have to Say
            </h2>
            <p className="w-[467px] m-auto text-[#6B7280] text-[18px] capitalize leading-[150%] pt-9">
              See your whole financial picture in one place, alongside a smarter
              approach to investing and real human.
            </p>
          </div>
          {/* Reviews  */}.
          <Flex className={"flex-wrap gap-4 items-start"}>
            <ReviewCard
              className={"bg-[#FFBC99]"}
              UserName={"Megan"}
              Qualification={"Student at New York University"}
              Comments={
                "“This cup is fantastic! It is so well insulated. I live in the desert, and it keeps my cold drinks cold in the heat” "
              }
              CommentClassName={'leading-[150%] pr-2'}
            />

            <ReviewCard
              className={"bg-[#000000]/20 "} 
              UserName={"Jerry Tang"}
              Qualification={"Recent graduate, Marketing at Sweatpals"}
              Comments={
                "“Joining Mate community is the best thing I have ever done. The projects I worked on gave me the experience I needed in content Marketing” "
              }
               CommentClassName={'leading-[170%] pr-2'}
            />

            <ReviewCard
              className={"bg-[#000000]/20"} leftClassName={'bg-[#F2F2F4] w-full h-1.5 rounded-tl-full'} rightClassName={''}
              UserName={"Jerry Tang"}
              Qualification={"Recent graduate, Marketing at Sweatpals"}
              Comments={
                "“I love the color. It’s even better in person. I love that iron flask gives you multiple lids as well. It’s sturdy.” "
              }
               CommentClassName={'leading-[150%] pr-1'}
            />
            <div className="-translate-y-14">
              <ReviewCard
                className={"bg-[#000000]/20"}
                UserName={"David K."}
                Qualification={"Recent graduate, Marketing at Sweatpals"}
                
                Comments={
                  "“I love the color. It’s even better in person. I love that iron flask gives you multiple lids as well. It’s sturdy. It is kept my cold beverages clothes for way longer than I had expected it to.” "
                }
               CommentClassName={'leading-[150%]'}
              />
            </div>
            <ReviewCard
              className={"bg-[#000000]/20"} leftClassName={'bg-[#F2F2F4] w-1.5 h-full '} rightClassName={'bg-[#F2F2F4] w-1 h-full '}
              UserName={"Megan"}
              Qualification={"Student at New York University"}
              Comments={
                "“I absolutely love this cup. I’ve bought several different brands and there’s always something I end up not liking about them. This one checks all of the boxes.” "
              }
               CommentClassName={'leading-[150%]'}
            />
            <div className="-translate-y-9">
              <ReviewCard
                className={"bg-[#000000]/20"}
                UserName={"David K."}
                Qualification={"Recent graduate"}
                Comments={
                  "“I absolutely love this cup. I’ve bought several different brands and there’s always something“ "
                }
                 CommentClassName={'leading-[150%]'}
              />
            </div>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Review;
