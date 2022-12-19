import React from "react";
import styled from "styled-components";
import ContextMenu from "./ContextMenu/ContextMenu";

import SidebarInner from "./SidebarInner";

const SidebarContainer = styled.nav`
  border: 1px solid black;
  height: 100vh;
  left: 0px;
  max-width: 20rem;
  min-width: 15rem;
  position: fixed;
  top: 0;
  width: 15vw;
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
