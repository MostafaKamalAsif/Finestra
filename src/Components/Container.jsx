import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-[520px] md:max-w-[680px] lg:max-w-[1296px] m-auto ${className}`}>{children}</div>
  )
}

export default Container