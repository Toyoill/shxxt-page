import React from "react";
import styled from "styled-components";
import ContextMenu from "./ContextMenu/ContextMenu";

import SidebarInner from "./SidebarInner";

const SidebarContainer = styled.nav`
  border: 1px solid black;
  height: 100vh;
  left: 0px;
  position: fixed;
  width: 16vw;
  z-index: 9;
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <ContextMenu />
      <SidebarInner />
    </SidebarContainer>
  );
}
