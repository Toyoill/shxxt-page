import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  id?: number;
}

const StyledDiv = styled.div`
  cursor: pointer;
  display: inline-block;
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Heading({ id, title }: Props) {
  if (id) console.log(id);
  return <StyledDiv>{title}</StyledDiv>;
}
