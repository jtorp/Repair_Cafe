import React, { useState, useEffect } from 'react'
import useScrollY from '../../../hooks/useScrollY';
import Logo from './Logo'
import NavLinks from './NavLinks'
import Button from "../Button"
import { Link } from "react-router-dom";


const Nav = () => {
  const scrollY = useScrollY();
  return (
    <header className={`fixed top-0 w-screen h-18 bg-grayWhite flex md:justify-between md:items-center  transition-all duration-300 ease-linear ${(scrollY > 40) && ' border-b-2 border-b-black'}`}>
      <div className='relative pt-3 pb-2 sm:px-2 md:px-12 flex items-center justify-between w-full overflow-hidden'>
        <Logo/>
        <NavLinks />
        <div className='flex px-4 md:px-0'>
          <Button className="link-btn">
            <Link to="login">Sign In</Link>
          </Button>
          <Button className="outlined-btn">
            <Link to="register">Sign up Free</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Nav


