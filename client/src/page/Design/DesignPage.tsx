import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Sidebar from "../../components/UI/Sidebar/Client/SidebarWrapper";

const StyledContainer = styled.div({
  paddingTop: "6rem",
  display: "flex",
  flexDirection: "column",
  fontSize: "30px",
  textAlign: "center",
});

const MainContentContainer = styled.div({
  paddingLeft: "15vw",
});

export default function DesignPage() {
  const params = useParams();

  return (
    <StyledContainer>
      <Sidebar />
      <MainContentContainer>
        <p>짱구야, 디자인 페이지 만들었다며.</p>
        <img
          src="https://pbs.twimg.com/media/FXXmyjrUIAUfXu1?format=jpg&name=medium"
          alt=""
        />
        <strong>아빠를 {params.id}번째 속인거니?</strong>
      </MainContentContainer>
    </StyledContainer>
  );
}
