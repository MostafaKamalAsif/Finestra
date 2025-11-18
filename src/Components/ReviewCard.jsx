import React from 'react'
import Flex from './Flex'

const ReviewCard = ({className, leftClassName, rightClassName, UserName, Qualification, Comments, CommentClassName}) => {
  return (
   <>
   <div className="w-[380px] md:w-[392px] m-auto md:m-0 py-9 px-6 bg-[#F0E6E0] dark:bg-gray-800 rounded-xl scroll-reveal card-hover">
    <div className={'flex gap-x-4 pb-4 items-star'}>

    <div className="w-14 h-14 rounded-full overflow-hidden relative hover-rotate">
  
      {/* Main Circle Color */}
      <div className={`w-full h-full ${className}`}></div>

      {/* Highlight */}
      <div className={`absolute left-0 top-0 ${leftClassName}`}></div>
      {/* Highlight */}
      <div className={`absolute right-0 top-0 ${rightClassName}`}></div>

    </div>

        <div className="">
            <h3 className='text-xl font-medium text-TextColor dark:text-white pb-2'>{UserName}</h3>
            <p className='text-[#656565] dark:text-gray-400 text-[16px]'>{Qualification}</p>
        </div>
    </div>
    <p className={`text-[16px] text-TextColor dark:text-gray-300 w-[344px] ${CommentClassName}`}>{Comments}</p>
   </div>
   </>
  )
}

export default ReviewCard