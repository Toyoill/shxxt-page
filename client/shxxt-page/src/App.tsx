import React from "react";
import styled from "styled-components";
import MainPage from "./page/Home/MainPage";
// import Sidebar from "./components/UI/Sidebar/Admin/Sidebar";

const MainContainer = styled.div({
  width: "100vw",
  height: 1000,
  backgroundColor: "#333",
});

function App() {
  return (
    <MainContainer>
      <MainPage />
    </MainContainer>
    // 최종 commit 전 되돌릴 코드
    /*

    */
    /*
    <div>
      <Sidebar />
      <Document />
      <Test />
    </div>
    */
  );
}

export default App;
