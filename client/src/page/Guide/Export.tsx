import React from "react";
import styled from "styled-components";
// import Sidebar from "../../components/UI/Sidebar/Client/SidebarWrapper";

const MainContentContainer = styled.div({
  marginLeft: "18vw",
});

const PhotoContainer = styled.div({
  width: "70%",
  height: "23vw",
  backgroundColor: "white",
  textAlign: "center",
});

function Control() {
  return (
    <MainContentContainer>
      <h2>HTML 코드로 추출</h2>
      <p>코드 추출 버튼을 눌러 액셀 시트를 HTML 코드로 추출할 수 있습니다.</p>
      <PhotoContainer>사진 들어갈 곳</PhotoContainer>
      <p>추가 기능 1 설명 ~</p>
      <PhotoContainer>사진 들어갈 곳</PhotoContainer>
      <p>추가 기능 2 설명 ~</p>
      <PhotoContainer>사진 들어갈 곳</PhotoContainer>
    </MainContentContainer>
  );
}

export default Control;
