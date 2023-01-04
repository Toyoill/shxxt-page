import React from "react";

import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import { Provider } from "react-redux";
import Layout from "./components/UI/Layout";
import MainPage from "./page/Home/MainPage";
import GuidePage from "./page/Guide/GuidePage";
// import SidebarWrapper from "./components/UI/Sidebar/Admin/SidebarWrapper";
import store from "./store/rootReducer";
import Document from "./page/Document/Admin/Document";

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
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/Guide" element={<GuidePage />} />
          </Route>
        </Routes>
      </MainContainer>
      <Routes>
        <Route path="/Admin" element={<Document />} />
      </Routes>
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
