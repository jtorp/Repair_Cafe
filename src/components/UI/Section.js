import React from 'react'

const Section = ({children}) => {
  return (
   <div className="w-screen h-fit py-40 gradient-grid-bg">
    <div className="container">
     {children}  
    </div>
   </div>
  )
}

export default Section