import React from "react";
import styled from "styled-components";

interface Props {
  children: JSX.Element | string;
}

const SubjectContainer = styled.div`
  cursor: pointer;
  margin-left: 1rem;
  margin-top: 0.5rem;

  &:hover {
    text-decoration: underline;
  }
`;

export default function Subject({ children }: Props) {
  return <SubjectContainer>{children}</SubjectContainer>;
}
