import React from "react";
import styled from "styled-components";
import SidebarData from "../data/sidebarData";

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
  SidebarData.addContent("Heading");
  SidebarData.addContent("Heading");
  SidebarData.addContent("Heading");
  console.log(SidebarData.getData());

  return (
    <SidebarContainer>
      <SidebarInner />
    </SidebarContainer>
  );
}
