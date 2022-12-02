import React from "react";
import styled from "styled-components";

interface Props {
  title: string;
  children: JSX.Element | Array<JSX.Element>;
}

const CategoryContainer = styled.details`
  margin: 0.5rem;

  & > summary {
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Category({ title, children }: Props) {
  return (
    <CategoryContainer>
      <summary>{title}</summary>
      {children}
    </CategoryContainer>
  );
}
