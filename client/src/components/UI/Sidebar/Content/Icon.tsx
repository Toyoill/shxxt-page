import React from "react";
import styled from "styled-components";
import SimpleLineIcon from "react-simple-line-icons";

const IconWrapper = styled.div<{ open: boolean }>`
  margin-inline: ${(props) => (props.open ? "0.2rem" : "0.1rem")};
  transform: ${(props) => (props.open ? "rotate(90deg)" : "")};
`;

interface Props {
  open: boolean;
}

export default function Icon({ open }: Props) {
  return (
    <IconWrapper open={open}>
      <SimpleLineIcon name="arrow-right" size="small" />
    </IconWrapper>
  );
}
