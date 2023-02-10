import React from "react";
import useWindowSize from "../../../hooks/useWindowSize";
import { Link } from "react-router-dom";
import logoImage from "../../../assets/Logo.png";

const Logo = () => {
  const { width } = useWindowSize();

  return (
    <Link to="/" onClick={() => window.location("/")}>
      <div className="transition-[width] duration-200 ease-in">
        {width < 480 ? (
          <img src={logoImage} alt="RepairCafe" className="w-12 h-12 " />
        ) : width < 976 ? (
          <img src={logoImage} alt="RepairCafe" className="w-14 h-14" />
        ) : (
          <img src={logoImage} alt="RepairCafe" className="w-16 h-16" />
        )}
      </div>
    </Link>
  );
};

export default Logo;
