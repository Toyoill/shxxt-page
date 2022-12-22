import React from "react";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Layout from "./components/UI/Layout";
import MainPage from "./page/Home/MainPage";
import GuidePage from "./page/Guide/GuidePage";
import Sidebar from "./components/UI/Sidebar/Admin/Sidebar";

const MainContainer = styled.div({
  width: "100vw",
  // height: 1000,
  backgroundColor: "#F5F2ED",
});

function App() {
  return (
    // 최종 commit 전 되돌릴 코드
    <MainContainer>
      <Sidebar />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/Guide" element={<GuidePage />} />
        </Route>
      </Routes>
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
