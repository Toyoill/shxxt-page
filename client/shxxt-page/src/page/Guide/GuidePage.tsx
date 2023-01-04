import React from "react";
import styled from "styled-components";
import SidebarWrapper from "../../components/UI/Sidebar/Admin/SidebarWrapper";

const StyledContainer = styled.div({
  paddingTop: "6rem",
  display: "flex",
  flexDirection: "column",
  fontSize: "30px",
  textAlign: "center",
});

function GuidePage() {
  return (
    <StyledContainer>
      <SidebarWrapper />
      <p>짱구야, 가이드 가르쳐 준다며.</p>
      <img
        src="https://pbs.twimg.com/media/FXXmyjrUIAUfXu1?format=jpg&name=medium"
        alt=""
      />
      <strong>아빠를 속인거니?</strong>
    </StyledContainer>
  );
}

export default GuidePage;
