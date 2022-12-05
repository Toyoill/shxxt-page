import React from "react";
import styled from "styled-components";
import MainPage from "./page/Home/MainPage";
// import Sidebar from "./components/UI/Sidebar/Sidebar";
// import Test from "./Test";

const MainContainer = styled.div({
  width: "100vw",
  height: 1000,
  backgroundColor: "#F5F2ED",
});

function App() {
  return (
    <MainContainer>
      <MainPage />
    </MainContainer>
  );
}

export default App;
