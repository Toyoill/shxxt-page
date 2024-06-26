import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import styled from "styled-components";
import { Provider } from "react-redux";
import Layout from "./components/UI/Layout";
import MainPage from "./page/Home/MainPage";
import GuidePage from "./page/Guide/GuidePage";
// import Control from "./page/Guide/Control";
import DesignPage from "./page/Design/DesignPage";
import ReferencePage from "./page/Reference/ReferencePage";
import store from "./store/rootReducer";
import Document from "./page/Document/Admin/Document";
import Sidebar from "./components/UI/Sidebar/Client/SidebarWrapper";

const MainContainer = styled.div({
  width: "100vw",
  // height: 1000,
  backgroundColor: "#F5F2ED",
});

function App() {
  return (
    <Provider store={store}>
      <MainContainer>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Navigate to="/Home" />} />
            <Route path="/Home" element={<MainPage />} />
            <Route element={<Sidebar />}>
              <Route path="/Guide" element={<Navigate to="/Guide/Upload" />} />
              <Route path="/Guide/*" element={<GuidePage />} />
              <Route path="/Reference" element={<ReferencePage />} />
            </Route>
            <Route path="/Design" element={<DesignPage />} />
          </Route>
        </Routes>
      </MainContainer>
      <Routes>
        <Route path="/Admin/:id" element={<Document />} />
        <Route path="/Admin" element={<Document />} />
      </Routes>
    </Provider>
  );
}

export default App;
