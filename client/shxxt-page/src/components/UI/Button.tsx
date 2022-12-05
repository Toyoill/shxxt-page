import React from "react";
import styled from "styled-components";

const StyledButton = styled.button({
  marginTop: "2rem",
  marginLeft: "auto",
  marginRight: "auto",
  display: "inline-flex",
  outline: "none",
  border: "none",
  borderRadius: "4px",
  color: "white",
  fontWeight: "bold",
  cursor: "pointer",
  paddingLeft: "1rem",
  paddingRight: "1rem",
  paddingTop: "0.5rem",
  paddingBottom: "auto",
  height: "2.25rem",
  fontSize: "1rem",
  background: "#228be6",
});

function Button() {
  return <StyledButton>Install 1.0.0</StyledButton>;
}

export default Button;
