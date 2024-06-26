import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// import GuidePage from "../../page/Guide/GuidePage";

interface PropsType {
  title: string;
  link: string;
}

const StyledButton = styled.button({
  marginTop: "2rem",
  // marginLeft: "auto",
  // marginRight: "auto",
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
  width: "8.2rem",
  height: "2.25rem",
  fontSize: "1rem",
  background: "#228be6",
});

const StyledNav = styled.nav({
  marginLeft: "auto",
  marginRight: "auto",
});

function Button({ title, link }: PropsType) {
  /*
  const navigate = useNavigate();

  const navigateToGuide = () => {
    navigate("../../page/Guide/GuidePage");
  };
  */

  return (
    <StyledNav>
      <Link to={link}>
        <StyledButton>{title}</StyledButton>
      </Link>
    </StyledNav>
  );
}

export default Button;
