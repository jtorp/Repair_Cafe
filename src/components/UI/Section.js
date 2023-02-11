import React from 'react'

const Section = ({children, title}) => {
  return (
   <div className="w-screen h-fit py-28">
    <div className="max-w-4xl mx-auto p-4 flex flex-col gap-y-8 justify-between items-center ">
    
    {title &&  <h1 className='max-w-lg tracking-wider p-2 text-4xl md:text-6xl font-bold text-center'>{title}</h1>}
    
     {children}  
    </div>
   </div>
  )
}

export default Section