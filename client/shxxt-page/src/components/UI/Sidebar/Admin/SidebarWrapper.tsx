import React from "react";
import styled from "styled-components";
import ContextMenu from "./ContextMenu/ContextMenu";

import SidebarInner from "./SidebarInner";

const SidebarContainer = styled.nav`
  background-color: #ffffff;
  box-shadow: 0px 0px 8px rgb(0 0 0 / 10%);
  height: 100vh;
  left: 0px;
  position: fixed;
  width: 16vw;
  z-index: 1;
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <ContextMenu />
      <SidebarInner />
    </SidebarContainer>
  );
}
