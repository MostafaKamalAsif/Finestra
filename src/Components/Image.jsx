import React from 'react'

const Image = ({className,imgsrc}) => {
  return (
     <img className={`${className}`} src={`${imgsrc}`} />
  )
}

export default Image