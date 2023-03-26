import React, { ReactNode } from "react";
import styled from "styled-components";

const Button = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #12b886;
  color: white;
  cursor: pointer;
  font-weight: bolder;
  height: min-content;
  padding-block: 0.3rem;
  padding-inline: 0.8rem;
  margin: 0;

  &:hover {
    background-color: #5cd4b0;
  }

  &:active {
    background-color: #12b886;
  }
`;

interface DesignBarbuttonPropsType {
  children: ReactNode;
}

export default function DesignBarButton({
  children,
}: DesignBarbuttonPropsType) {
  return <Button>{children}</Button>;
}
