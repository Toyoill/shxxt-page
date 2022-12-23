import React from "react";
import styled from "styled-components";
import Content from "./Content";

const MainPageWrapper = styled.div({
  // marginLeft: "10rem",
  width: "100vw",
  height: "100%",
  backgroundColor: "#0aa",
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
