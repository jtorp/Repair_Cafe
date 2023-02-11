import React, { useState, useEffect } from 'react'
import useScrollY from '../../../hooks/useScrollY';
import Logo from './Logo'
import NavLinks from './NavLinks'
import Button from "../Button"
import { Link } from "react-router-dom";


const Nav = () => {
  const scrollY = useScrollY();
  return (
    <header className={`fixed top-0 w-screen h-18 bg-grayWhite flex md:items-center  transition-all duration-200 ease-out ${(scrollY > 40) && ' border-b-2 border-b-black'}`}>
      <div className='pt-3 pb-2 px-3  md:px-12 flex items-center justify-around w-full overflow-hidden'>
          <Logo />
        <nav className="hidden md:inline-flex">
       <NavLinks/>
        </nav>
       <div className="flex">
       <Button className="link-btn">
            <Link to="login">Sign In</Link>
          </Button>
          <Button className="outlined-btn">
            <Link to="register">Sign up Free</Link>
          </Button>
       </div>
        <button className='mobile-open-btn md:hidden focus:outline-none'>
          <svg className="-mr-1 ml-2 mt-1 h-10 w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" aria-hidden="true">
            <path fillRule="evenodd" d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Nav


