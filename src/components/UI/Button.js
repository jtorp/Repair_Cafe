import React from 'react'
import { Link } from 'react-router-dom'

const Button = ({name}) => {
  return (
  
    <button className="mx-2 px-4 border-2 border-black h-10 bg-purple-400 " >
          <Link to="register" >{name ? name : "btn"}</Link>
    </button>
  
  )
}

export default Button