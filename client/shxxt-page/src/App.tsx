import React from "react";
import { Provider } from "react-redux";

import styled from "styled-components";
// import MainPage from "./page/Home/MainPage";
// import Sidebar from "./components/UI/Sidebar/Admin/SidebarWrapper";
import Document from "./page/Document/Admin/Document";

import store from "./store/rootReducer";

const MainContainer = styled.div({
  width: "100%",
  height: "100vh",
});

function App() {
  return (
    // 최종 commit 전 되돌릴 코드
    <Provider store={store}>
      <MainContainer>
        <Document />
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
