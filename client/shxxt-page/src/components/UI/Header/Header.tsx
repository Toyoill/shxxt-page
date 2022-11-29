import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "10rem",
  backgroundColor: "#a00",
});

function Header() {
  return (
    <div>
      <HeaderContainer />
    </div>
  );
}

export default Header;
