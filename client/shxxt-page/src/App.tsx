import React from "react";
import styled from "styled-components";
import "./App.css";
import Footer from "./components/UI/Footer/Footer";
import Header from "./components/UI/Header/Header";

const MainContainer = styled.div({
  width: "100vw",
  height: 1000,
  backgroundColor: "#333",
});

function App() {
  return (
    <MainContainer>
      <Header />
      <Footer />
    </MainContainer>
  );
}

export default App;
