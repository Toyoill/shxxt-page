import React from "react";
import styled from "styled-components";

import HeadingWrapper from "./ContentWrapper/HeadingWrapper";
import Heading from "../Content/Heading";
import SubHeadingWrapper from "./ContentWrapper/SubHeadingWrapper";
import SubHeading from "../Content/SubHeading";

const ListWrapper = styled.li`
  margin-block: 0.5rem;
  list-style-type: none;

  & ol {
    padding-left: 0.5rem;
  }
`;

export default function List() {
  return (
    <ListWrapper>
      <details>
        <HeadingWrapper>
          <Heading title="Awesome title" />
        </HeadingWrapper>
        <ol>
          <SubHeadingWrapper>
            <SubHeading>Awesome post</SubHeading>
          </SubHeadingWrapper>
          <SubHeadingWrapper>
            <SubHeading>Awesome post</SubHeading>
          </SubHeadingWrapper>
          <SubHeadingWrapper>
            <SubHeading>Awesome post</SubHeading>
          </SubHeadingWrapper>
        </ol>
      </details>
    </ListWrapper>
  );
}
