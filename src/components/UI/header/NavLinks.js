import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigates } from "react-router-dom";


const links = [
  {name: "About", to: "/link", data: "01", icon:true},
  {name: "News", to: "/link", data: "02", icon:false},
  {name: "Calendar", to: "/link", data: "03", icon:false},
];


const NavLinks = () => {
  const [menuOpen, setMenuOpen] = useState(true);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const handleMenuClick=()=>{
setTimeout(()=>{
  setMenuOpen(false)
}, 1000)
  }

  const guestLinks   = links.map((link) => {
    return (
      <li
        key={link.name}
        className=" flex items-center md:px-5 mr-2 transition-all duration-300 ease-in  text-base font-medium"
      >
        <span data-text={link.data} className="tracking-relaxed ">
          <Link
         
           to={link.to}>{link.name}</Link>
        </span>
        {link.icon && 
        <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="black" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
      </svg>}
      </li>
    );
  });

  return (
    <>
       <ul  className={
                    menuOpen
                      ? "md:pt-0 md:relative flex flex-col md:flex-row text-2xl tracking-wide leading-relaxed"
                      : "md:leading-snug md:relative flex md:tracking-normal pl-0 pt-0 xl:ml-auto"
                  }>
                {guestLinks}
              </ul>
    </>
  );
};

export default NavLinks;
