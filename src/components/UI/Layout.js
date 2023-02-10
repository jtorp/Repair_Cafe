import React from "react";
import { Outlet } from "react-router-dom";
import ThemeSwitch from "../ThemeSwitch";
import Nav from "../UI/header/Nav";

const Layout = () => {
  return (
    <main className="">
      <Nav/>
      <Outlet />
      <ThemeSwitch />
    </main>
  );
};

export default Layout;
