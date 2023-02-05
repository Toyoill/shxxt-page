import React from "react";
import styled from "styled-components";

interface Props {
  children: string;
  canClick?: boolean;
}

const StyledDiv = styled.div<{ canClick: boolean }>`
  cursor: pointer;
  color: black;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  pointer-events: ${(props) => (props.canClick ? "true" : "false")};
  list-style-type: none;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function SubHeading({ children, canClick = true }: Props) {
  return <StyledDiv canClick={canClick}>{children}</StyledDiv>;
}
