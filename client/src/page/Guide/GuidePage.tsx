import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
// import Sidebar from "../../components/UI/Sidebar/Client/SidebarWrapper";
import Control from "./Control";
import Export from "./Export";
import Upload from "./Upload";

const StyledContainer = styled.div({
  paddingTop: "6rem",
  display: "flex",
  flexDirection: "column",
  // fontSize: "30px",
  // textAlign: "center",
});

// const MainContentContainer = styled.div({
//   marginLeft: "18vw",
// });

// const PhotoContainer = styled.div({
//   width: "70%",
//   height: "23vw",
//   backgroundColor: "white",
//   textAlign: "center",
// });

const SidebarContainer = styled.div({
  paddingLeft: "1.5vw",
});

const TestContainer = styled.div({
  zIndex: "1",
  position: "fixed",
  top: "110px",
  fontSize: "28px",
});

const TestContainer1 = styled.div({
  zIndex: "1",
  position: "fixed",
  top: "170px",
  left: "3vw",
});

const TestContainer2 = styled.div({
  zIndex: "1",
  position: "fixed",
  top: "210px",
  left: "3vw",
});

const TestContainer3 = styled.div({
  zIndex: "1",
  position: "fixed",
  top: "250px",
  left: "3vw",
});

function GuidePage() {
  return (
    <StyledContainer>
      {/* <Sidebar /> */}
      <SidebarContainer>
        <TestContainer>Guide</TestContainer>
        <TestContainer1>
          <Link to="/Guide/Upload">파일 업로드</Link>
        </TestContainer1>
        <TestContainer2>
          <Link to="/Guide/Control">액셀 시트 조작</Link>
        </TestContainer2>
        <TestContainer3>
          <Link to="/Guide/Export">HTML 코드 추출</Link>
        </TestContainer3>
      </SidebarContainer>
      <Routes>
        <Route path="Upload" element={<Upload />} />
        <Route path="Control" element={<Control />} />
        <Route path="Export" element={<Export />} />
      </Routes>
      {/* <Upload />
      <Control />
      <Export /> */}
    </StyledContainer>
  );
}

export default GuidePage;
