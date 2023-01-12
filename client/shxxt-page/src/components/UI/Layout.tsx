import React from "react";
import { Outlet } from "react-router-dom";
// import styled from "styled-components";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
