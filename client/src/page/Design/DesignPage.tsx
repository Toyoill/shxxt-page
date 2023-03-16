import React from "react";
import styled from "styled-components";
import DesignBar from "../../components/UI/Design/DesignBar";
// import Sidebar from "../../components/UI/Sidebar/Client/SidebarWrapper";

const StyledContainer = styled.div`
  padding-top: 6rem;
  display: flex;
  flex-direction: column;
  font-size: 30px;
  text-align: center;
`;

const MainContentContainer = styled.div`
  margin-top: 10vh;
  height: 50vh;
  display: flex;
  justify-content: center;
`;

export default function DesignPage() {
  return (
    <StyledContainer>
      {/* <Sidebar /> */}
      <MainContentContainer>
        <DesignBar />
      </MainContentContainer>
    </StyledContainer>
  );
}
