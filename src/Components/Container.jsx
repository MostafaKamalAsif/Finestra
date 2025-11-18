import React from 'react'

const Container = ({children,className}) => {
  return (
    <div className={`max-w-[500px] md:max-w-[720px] lg:max-w-[1400px] m-auto ${className}`}>{children}</div>
  )
}

export default Container