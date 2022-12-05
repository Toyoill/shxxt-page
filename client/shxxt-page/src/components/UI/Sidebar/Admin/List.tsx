import React, { useState } from "react";
import styled from "styled-components";

import HeadingWrapper from "./ContentWrapper/HeadingWrapper";
import Heading from "../Content/Heading";
import SubHeadingWrapper from "./ContentWrapper/SubHeadingWrapper";
import SubHeading from "../Content/SubHeading";

const ListWrapper = styled.li<{ longPressed: boolean }>`
  background-color: ${(props) => (props.longPressed ? "#c5c5c5" : "")};
  border-radius: 5px;
  margin-block: 0.5rem;
  list-style-type: none;

  & ol {
    padding-left: 0.5rem;
  }
`;

export default function List() {
  const [longPressed, setLongPressed] = useState(false);
  return (
    <ListWrapper longPressed={longPressed}>
      <details>
        <HeadingWrapper longPressed={longPressed} onLongPress={setLongPressed}>
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
