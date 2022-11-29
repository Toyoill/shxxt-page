import React from "react";
import styled from "styled-components";
import Content from "./page/Content";
import Footer from "./UI/footer/Footer";
import Header from "./UI/header/Header";

const MainPageWrapper = styled.div({
  marginLeft: "10rem",
  width: "100%",
  height: "100%",
  backgroundColor: "#0aa",
});

export default function MainPage() {
  return (
    <div>
      <MainPageWrapper>
        <Header />
        <Content />
        <Footer />
      </MainPageWrapper>
    </div>
  );
}
