import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Footer/Footer";

const HeaderContainer = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "10rem",
  backgroundColor: "#a00",
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
