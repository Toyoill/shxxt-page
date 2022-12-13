import React from "react";
import styled from "styled-components";

interface Props {
  children: string;
  canClick?: boolean;
  idx?: number;
  belongTo?: number;
}

const StyledDiv = styled.div<{ canClick: boolean }>`
  cursor: pointer;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  pointer-events: ${(props) => (props.canClick ? "true" : "false")};
  list-style-type: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default function SubHeading({
  idx,
  belongTo,
  children,
  canClick = true,
}: Props) {
  if (!idx) console.log("no Idx");
  if (!belongTo) console.log("belongTo");
  return <StyledDiv canClick={canClick}>{children}</StyledDiv>;
}
