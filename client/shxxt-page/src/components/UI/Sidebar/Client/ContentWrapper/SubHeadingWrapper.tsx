import React from "react";
import styled from "styled-components";

interface Props {
  children: JSX.Element;
}

const Wrapper = styled.li`
  border-radius: 5px;
  box-sizing: border-box;
  display: inline-block;
  padding-block: 0.2rem;
  width: 90%;
`;

export default function ContentContainer({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
