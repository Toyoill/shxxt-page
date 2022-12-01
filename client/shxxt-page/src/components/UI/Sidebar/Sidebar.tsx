import React from "react";
import styled from "styled-components";

import Toggle from "./Toggle";

const SidebarContainer = styled.nav`
  border: 1px solid black;
  height: 100vh;
  left: 0;
  min-width: 15rem;
  position: fixed;
  width: 20vw;
  z-index: 9;

  & > ul {
    margin: 0;
    margin-left: 1.5rem;
    margin-right: 3rem;
    padding: 0;
  }
`;

export default function Sidebar() {
  return (
    <SidebarContainer>
      <ul>
        <Toggle title="myToggle">
          <li>test1</li>
          <li>test2</li>
          <li>test3</li>
        </Toggle>
      </ul>
    </SidebarContainer>
  );
}
