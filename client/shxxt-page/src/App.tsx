import React from "react";

import styled from "styled-components";
<<<<<<< Updated upstream
import MainPage from "./page/Home/MainPage";
=======
// import MainPage from "./page/Home/MainPage";
>>>>>>> Stashed changes
import Sidebar from "./components/UI/Sidebar/Admin/Sidebar";

const MainContainer = styled.div({
  width: "100vw",
  height: 1000,
  backgroundColor: "#F5F2ED",
});

function App() {
  return (
    // 최종 commit 전 되돌릴 코드
    <MainContainer>
      <Sidebar />
<<<<<<< Updated upstream
      <MainPage />
=======
>>>>>>> Stashed changes
    </MainContainer>
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
