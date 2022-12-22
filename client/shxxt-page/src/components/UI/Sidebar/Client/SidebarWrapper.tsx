import React from "react";
import styled from "styled-components";

import SidebarInner from "./SidebarInner";

const SidebarContainer = styled.nav`
  background-color: #ffffff;
  box-shadow: 0px 0px 8px rgb(0 0 0 / 10%);
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
      <SidebarInner />
    </SidebarContainer>
  );
}
