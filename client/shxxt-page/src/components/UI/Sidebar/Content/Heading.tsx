import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  canClick?: boolean;
}

const StyledSummary = styled.summary<{ canClick: boolean }>`
  cursor: pointer;
  pointer-events: ${(props) => (props.canClick ? "true" : "false")};

  &:hover {
    text-decoration: underline;
  }
`;

export default function Heading({ title, canClick = true }: Props) {
  return <StyledSummary canClick={canClick}>{title}</StyledSummary>;
}
