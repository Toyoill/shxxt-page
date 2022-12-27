import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 10rem;
  background-color: #a00;
  z-index: 1;
`;

function Header() {
  return <HeaderContainer />;
}

export default Header;
