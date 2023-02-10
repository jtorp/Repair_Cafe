import React, {useState, useEffect} from 'react'
import useScrollY from '../../../hooks/useScrollY';
import Logo from './Logo'
import NavLinks from './NavLinks'
import Button from "../Button"


const Nav = () => {
    const scrollY = useScrollY();    
    return (
  <header  className={`fixed top-0 w-full h-18 bg-grayWhite flex justify-between items-center  transition-all duration-300 ease-linear backdrop-blur-lg ${(scrollY>40) && ' border-b-2 border-b-black backdrop-blur-lg'}`}>
    <div className='relative py-2 px-4 md:px-12  flex items-center justify-between w-full overflow-hidden'>
      <div className="px-2">   <Logo/></div>
      <div className="px-2 ">  <NavLinks/></div>
      <div className="px-2">  
       <Button name="sign in"/>
      <Button name="sign up"/>
      </div>
     
 

    </div>
  </header>

     
        //     <Logo/>
        //     <div className=" md:mx-3 h-full flex md:gap-2 items-center md:order-2 ">
        //         <Link to="login" className="focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5 mr-2 dark:hover:bg-gray-600 focus:outline-none dark:focus:ring-gray-800">Login</Link>

        //         <Link to="register" className=" bg-crazyYellow hover:brightness-110 focus:ring-4 focus:ring-erin font-medium rounded-lg text-sm md:text-base px-4 py-2 md:px-5 md:py-2.5 mr-1 md:mr-2 dark:erin dark:hover:brightness-110 focus:outline-none ">Sign up</Link>
        //     </div>
     
    )
}

export default Nav


