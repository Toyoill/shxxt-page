import React from "react";
import styled from "styled-components";

import EditBar from "./Admin/EditBar";
import Heading from "./Content/Heading";

const SidebarContainer = styled.nav`
  border: 1px solid black;
  height: 100vh;
  left: 0;
  min-width: 15rem;
  position: fixed;
  width: 20vw;
  z-index: 9;
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <EditBar />
      <Heading title="title" />
    </SidebarContainer>
  );
}
