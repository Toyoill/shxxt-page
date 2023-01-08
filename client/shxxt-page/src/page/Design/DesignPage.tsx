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

export default function DesignPage() {
  return (
    <StyledContainer>
      <SidebarWrapper />
      <p>짱구야, 디자인 페이지 만들었다며.</p>
      <img
        src="https://pbs.twimg.com/media/FXXmyjrUIAUfXu1?format=jpg&name=medium"
        alt=""
      />
      <strong>아빠를 또속인거니?</strong>
    </StyledContainer>
  );
}
