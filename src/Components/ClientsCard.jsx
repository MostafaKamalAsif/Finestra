import React, { useState, useEffect, useRef } from 'react';
import Flex from './Flex';
import CountUp from 'react-countup';

const ClientsCard = ({ children, Feedback, numbers,ratio,more }) => {
  const ref = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setStart(true),
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="m-auto md:m-0 w-[324px] rounded-3xl mb-3 md:mb-0 p-6 dark:bg-[#0B0B0B] bg-white">
      <Flex className="px-2 py-1 gap-x-2 text-[#FF5F5F] bg-[#FF5F5F]/8 rounded-sm mb-4 flex w-fit">
        {children}
      </Flex>

      <Flex className="items-start text-SecondryColor pb-8">
        <span className="text-[70px] md:text-[100px] leading-[120%]">
          {start ? (
            <CountUp start={0} end={numbers} duration={5} separator="," />
          ) : (
            "0"
          )}
         {ratio}
        </span>
        <span className="text-[50px] font-medium pt-2">{more}</span>
      </Flex>

      <p className="text-[18px] text-[#6B7280]">{Feedback}</p>
    </div>
  );
};

export default ClientsCard;
