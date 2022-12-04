import React from "react";

// 최종 commit 전 복구
// import styled from "styled-components";
// import MainPage from "./page/Home/MainPage";
import Sidebar from "./components/UI/Sidebar/Sidebar";
import Document from "./page/Document/Document";
import Test from "./Test";

// const MainContainer = styled.div({
//   width: "100vw",
//   height: 1000,
//   backgroundColor: "#333",
// });

function App() {
  return (
    // 최종 commit 전 되돌릴 코드
    // <MainContainer>
    //   <MainPage />
    // </MainContainer>
    <>
      <Sidebar />
      <Document />
      <Test />
    </>
  );
}

export default App;
