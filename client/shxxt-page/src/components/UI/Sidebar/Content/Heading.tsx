import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
}

const StyledDiv = styled.div`
  cursor: pointer;
  display: inline-block;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Heading({ title }: Props) {
  return <StyledDiv>{title}</StyledDiv>;
}
