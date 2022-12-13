import React from "react";

import styled from "styled-components";
import MainPage from "./page/Home/MainPage";
import Header from "./components/UI/Header/Header";
import Footer from "./components/UI/Footer/Footer";

// import Sidebar from "./components/UI/Sidebar/Admin/Sidebar";

const MainContainer = styled.div({
  width: "100vw",
  height: 1000,
  backgroundColor: "#F5F2ED",
});

function App() {
  return (
    <MainContainer>
      <Header />
      <MainPage />
      <Footer />
    </MainContainer>
  );
}

export default App;
