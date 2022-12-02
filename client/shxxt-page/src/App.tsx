import React from "react";

// 최종 commit 전 복구
// import styled from "styled-components";
// import MainPage from "./page/Home/MainPage";
import Sidebar from "./components/UI/Sidebar/Admin/Sidebar";

import Document from "./page/Document/Document";

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
    </>
  );
}

export default App;
