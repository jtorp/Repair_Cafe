import React from "react";
import useDarkMode from "../hooks/useDarkMode";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";

const ThemeSwitch = ({ onClick }) => {
  const [darkTheme, setDarkTheme] = useDarkMode();

  return (
    <span
      className="fixed bottom-3 right-0 mr-6 z-50 cursor-pointer"
      onClick={() => setDarkTheme(!darkTheme)}
    >
      {darkTheme ? (
        <RiSunLine size="22" className="text-crazyYellow" />
      ) : (
        <RiMoonClearLine size="22" className="text-purple-300"/>
      )}
    </span>
  );
};

export default ThemeSwitch;
