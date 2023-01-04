import React from "react";
import styled from "styled-components";
import Content from "./Content";
// import SidebarWrapper from "../../components/UI/Sidebar/Admin/SidebarWrapper";
// import Footer from "../../components/UI/Footer/Footer";
// import Header from "../../components/UI/Header/Header";


const MainPageWrapper = styled.div({
  // marginLeft: "10rem",
  width: "100vw",
  height: "100%",
  // backgroundColor: "#0aa",
});

export default function MainPage() {
  return (
    <div>
      <MainPageWrapper>
        <Content />
      </MainPageWrapper>
    </div>
  );
}
