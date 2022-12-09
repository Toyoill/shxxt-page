import React, { useRef, useState } from "react";
import styled from "styled-components";

import HeadingWrapper from "./ContentWrapper/HeadingWrapper";
import Heading from "../Content/Heading";
import SubHeadingWrapper from "./ContentWrapper/SubHeadingWrapper";
import SubHeading from "../Content/SubHeading";

const ListWrapper = styled.li<{ open: boolean }>`
  border-radius: 5px;
  margin-block: 0.5rem;
  list-style-type: none;

  & ol {
    padding-left: 0.5rem;
    display: ${(props) => (props.open ? "" : "none")};
  }
`;

export default function List() {
  const [open, setOpen] = useState(false);
  const canOpen = useRef(false);

  const longPressHandler = (longPressed: boolean) => {
    if (longPressed) canOpen.current = true;
  };

  const clickHandler = () => {
    if (canOpen.current) canOpen.current = false;
    else setOpen((prev) => !prev);
  };

  return (
    <ListWrapper open={open}>
      <HeadingWrapper
        longPressHandler={longPressHandler}
        clickHandler={clickHandler}
      >
        <Heading title="Awesome Title" />
      </HeadingWrapper>
      <ol>
        <SubHeadingWrapper>
          <SubHeading>Awesome Text</SubHeading>
        </SubHeadingWrapper>
      </ol>
    </ListWrapper>
  );
}
