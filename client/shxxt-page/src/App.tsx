import React from "react";
import styled from "styled-components";
import "./App.css";
import MainPage from "./components/MainPage";
import Sidebar from "./components/UI/asdf/Sidebar";

const MainContainer = styled.div({
  width: "100vw",
  height: 1000,
  backgroundColor: "#333",
});

function App() {
  return (
    <MainContainer>
      <Sidebar />
      <MainPage />
    </MainContainer>
  );
}

export default App;
