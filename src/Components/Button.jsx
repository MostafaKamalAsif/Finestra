
import React from 'react'

const Button = ({className,children,onclick}) => {
  return (
    <div onClick={onclick} className={`text-[#FFFFFF] font-medium text-[13px] md:text-[16px] ${className}`}>{children}</div>
  )
}

export default Button