import React from 'react'
import Flex from './Flex'

const ReviewCard = ({className,UserName,Qualification,Comments,CommentClassName}) => {
  return (
   <>
   <div className="w-[392px] py-9 px-6 bg-[#F0E6E0] rounded-xl">
    <Flex className={'gap-x-4 pb-4 items-start'}>
        <div className={`w-16 h-16 rounded-[1000px]  ${className}`}></div>
        <div className="">
            <h3 className='text-xl font-medium text-TextColor pb-2'>{UserName}</h3>
            <p className='text-[#656565] text-[16px]'>{Qualification}</p>
        </div>
    </Flex>
    <p className={`text-[16px] text-TextColor w-[344px]  ${CommentClassName}`}>{Comments}</p>
   </div>
   </>
  )
}

export default ReviewCard