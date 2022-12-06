import React from "react";
import styled from "styled-components";

import List from "./List";
import EditBar from "./EditBar";

const SidebarContainer = styled.nav`
  border: 1px solid black;
  height: 100vh;
  left: 0;
  min-width: 15rem;
  position: fixed;
  top: 0;
  width: 20vw;
  z-index: 9;

  & > ol {
    margin: 0;
    margin-top: 1rem;
    padding-inline: 0.5rem;
  }
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <EditBar />
      <ol>
        <List />
        <List />
        <List />
      </ol>
    </SidebarContainer>
  );
}
