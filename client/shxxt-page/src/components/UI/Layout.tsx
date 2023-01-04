import React from "react";
import { Outlet } from "react-router-dom";
// import styled from "styled-components";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
// import SidebarWrapper from "./Sidebar/Admin/SidebarWrapper";

// const HeaderContainer = styled.div({
//   position: "fixed",
//   top: 0,
//   left: 0,
//   width: "100%",
//   height: "10rem",
//   backgroundColor: "#a00",
//   zIndex: "1",
// });


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
