import React from 'react'

const Button = ({handleClick, children,className, ...props}) => {
  return (
  <div className="p-2">
    <button onClick={handleClick} {...props} className={`cursor-pointer  ${className && className}`} >
        {children}
    </button>
    </div>
  )
}

export default Button