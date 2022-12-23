import React from "react";

import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Provider } from "react-redux";
import Layout from "./components/UI/Layout";
import MainPage from "./page/Home/MainPage";
import GuidePage from "./page/Guide/GuidePage";
import SidebarWrapper from "./components/UI/Sidebar/Admin/SidebarWrapper";
import store from "./store/rootReducer";

const MainContainer = styled.div({
  width: "100vw",
  // height: 1000,
  backgroundColor: "#F5F2ED",
});

function App() {
  return (
    // 최종 commit 전 되돌릴 코드
    <Provider store={store}>
      <MainContainer>
        <SidebarWrapper />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/Guide" element={<GuidePage />} />
          </Route>
        </Routes>
      </MainContainer>
    </Provider>
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
