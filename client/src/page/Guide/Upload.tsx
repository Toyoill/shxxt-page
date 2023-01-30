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
      <div>
        <h2>파일 업로드</h2>
      </div>
      <p>파일 업로드 버튼을 클릭하고, 로컬 데이터 파일을 업로드하세요.</p>
      <PhotoContainer>사진 들어갈 곳</PhotoContainer>
      <p>파일을 드래그하여 업로드 하는 것도 가능합니다.</p>
      <PhotoContainer>사진 들어갈 곳</PhotoContainer>
      <p>
        업로드가 완료되면, 업로드한 로컬 데이터 파일에 기반한 엑셀 시트가 화면에
        나옵니다.
      </p>
      <PhotoContainer>사진 들어갈 곳</PhotoContainer>
    </MainContentContainer>
  );
}

export default Control;
