import React from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
  position: -webkit-sticky;
  position: sticky;
  width: 100%;
  height: 10rem;
  background-color: #a00;
`;

function Header() {
  return <HeaderContainer />;
}

export default Header;
