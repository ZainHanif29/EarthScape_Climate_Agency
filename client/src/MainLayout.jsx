import React from "react";
import Header from "./components/main_layout/common/Header";
import Footer from "./components/main_layout/common/Footer";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
