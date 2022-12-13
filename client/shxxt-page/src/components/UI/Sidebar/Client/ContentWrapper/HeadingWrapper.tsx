import React from "react";
import styled from "styled-components";

interface Props {
  children: JSX.Element;
}

const Wrapper = styled.summary`
  border-radius: 5px;
  box-sizing: border-box;
  padding-block: 0.2rem;
  width: 100%;
`;

export default function ContentContainer({ children }: Props) {
  return <Wrapper>{children}</Wrapper>;
}
