import React from 'react'

const Flex = ({children,className}) => {
  return (
    <div className={` md:flex items-center  ${className}`}>{children}</div>
  )
}

export default Flex