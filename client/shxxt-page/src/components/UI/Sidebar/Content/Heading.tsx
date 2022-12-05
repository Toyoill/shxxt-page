import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  canClick?: boolean;
}

const StyledDiv = styled.div<{ canClick: boolean }>`
  cursor: pointer;
  display: inline-block;
  pointer-events: ${(props) => (props.canClick ? "true" : "false")};

  &:hover {
    text-decoration: underline;
  }
`;

export default function Heading({ title, canClick = true }: Props) {
  return <StyledDiv canClick={canClick}>{title}</StyledDiv>;
}
