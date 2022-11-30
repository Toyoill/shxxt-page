import React from "react";
import styled from "styled-components";

const SidebarContainer = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "10rem",
  height: "100%",
  backgroundColor: "#aa0",
  zIndex: 9,
});

export default function Sidebar() {
  return (
    <div>
      <SidebarContainer />
    </div>
  );
}
