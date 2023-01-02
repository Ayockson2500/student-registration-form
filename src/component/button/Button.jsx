import React, { Children } from 'react'

const Button = ({children, onClick, className}) => {
  return (
    <>
    <button onClick={onClick} className={className}>{children}</button>
    </>
  )
}

export default Button