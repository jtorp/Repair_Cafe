import React from 'react'

const Button = ({handleClick, children,className, ...props}) => {
  return (
  <div className="p-3 mx-1">
    <button onClick={handleClick} {...props} className={`cursor-pointer  ${className && className}`} >
        {children}
    </button>
    </div>
  )
}

export default Button