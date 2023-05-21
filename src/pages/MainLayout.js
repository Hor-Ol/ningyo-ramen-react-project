// REACT & ROUTER IMPORTS:
import React from "react";
import { Outlet } from "react-router-dom";

// COMPONENTS IMPORT:
import MainNavigation from "../components/main/MainNavigation";
import Cart from "../components/main/Cart";

const MainLayout = () => {
  return (
    <>
      <MainNavigation />
      <Outlet />
      <Cart />
    </>
  );
};

export default MainLayout;
