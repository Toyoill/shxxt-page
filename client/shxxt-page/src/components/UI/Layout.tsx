import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer/Footer";
// import SidebarWrapper from "./Sidebar/Admin/SidebarWrapper";

const HeaderContainer = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "10rem",
  backgroundColor: "#a00",
  zIndex: "1",
});

function Layout() {
  return (
    <div>
      <HeaderContainer>헤더</HeaderContainer>
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
