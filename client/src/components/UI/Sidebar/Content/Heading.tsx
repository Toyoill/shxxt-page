import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

const StyledDiv = styled.div`
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;
  color: black;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Heading({ title }: Props) {
  return <StyledDiv>{title}</StyledDiv>;
}
