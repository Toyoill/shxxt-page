import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div({
  // position: "fixed",
  marginTop: "3rem",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "10rem",
  backgroundColor: "#0a0",
});

function Footer() {
  return <FooterContainer />;
}

export default Footer;
