import React from "react";
import { useState } from "react";
import { Link, useLocation, useNavigates } from "react-router-dom";


const links = [
  {name: "Link2", to: "/link", data: "01"},
  {name: "Link1", to: "/link", data: "02"},
  {name: "Link1", to: "/link", data: "03"},
  {name: "Link2", to: "/link", data: "04"},
];


const NavLinks = () => {
  const [menuOpen, setMenuOpen] = useState(false);
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
        className=" flex items-center md:px-3 mr-2 transition-all duration-300 ease-in md:text-sm px-5 font-extralight md:font-light md:capitalize"
      >
        <span data-text={link.data} className="tracking-relaxed ">
          <Link
         
           to={link.to}>{link.name}</Link>
        </span>
      </li>
    );
  });

  return (
    <>
       <ul  className={
                    menuOpen
                      ? "z-30 md:pt-0 md:relative flex flex-col md:flex-row text-2xl tracking-wide leading-relaxed"
                      : "md:leading-snug md:relative flex md:text-sm md:tracking-normal pl-0 pt-0 xl:ml-auto"
                  }>
                {guestLinks}
              </ul>
    </>
  );
};

export default NavLinks;
