import React from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";

interface PropsType {
  title: string;
}

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
  paddingBottom: "0.5rem",
  height: "2.25rem",
  fontSize: "1rem",
  background: "#228be6",
});

function Button({ title }: PropsType) {
  /*
  const navigate = useNavigate();

  const navigateToGuide = () => {
    navigate("../../page/Guide/GuidePage");
  };
  */

  return <StyledButton>{title}</StyledButton>;
}

export default Button;
