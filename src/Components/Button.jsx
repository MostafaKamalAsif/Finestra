
import React from 'react'

const Button = ({className,children,onclick}) => {
  return (
    <div onClick={onclick} className={`text-[#FFFFFF] font-medium text-[16px] ${className}`}>{children}</div>
  )
}

export default Button