import React, { useRef, useState } from "react";
import styled from "styled-components";

import { Content } from "../data/sidebarData";
import HeadingWrapper from "./ContentWrapper/HeadingWrapper";
import Heading from "../Content/Heading";
import SubHeadingWrapper from "./ContentWrapper/SubHeadingWrapper";
import SubHeading from "../Content/SubHeading";
import Icon from "../Content/Icon";

interface Props {
  content: Content;
}

const ListWrapper = styled.li<{ open: boolean; selected: boolean }>`
  background-color: ${(props) => (props.selected ? "#cbcbcb" : "")};
  border-radius: 5px;
  margin-top: 0.3rem;
  list-style-type: none;

  & ol {
    padding-left: 0.8rem;
    display: ${(props) => (props.open ? "" : "none")};
  }
`;

export default function List({ content }: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(false);
  const canOpen = useRef(false);

  const longPressHandler = (longPressed: boolean) => {
    if (longPressed) canOpen.current = true;
    setSelected(longPressed);
  };

  const clickHandler = () => {
    if (canOpen.current) canOpen.current = false;
    else setOpen((prev) => !prev);
  };

  const subHeadings = content.subHeadings?.map((subHeading) => (
    <SubHeadingWrapper key={subHeading.idx}>
      <SubHeading idx={subHeading.idx} belongTo={subHeading.belongTo}>
        {subHeading.main}
      </SubHeading>
    </SubHeadingWrapper>
  ));

  return (
    <ListWrapper open={open} selected={selected}>
      <HeadingWrapper
        longPressHandler={longPressHandler}
        clickHandler={clickHandler}
      >
        <Icon open={open} />
        <Heading title={content.main} />
      </HeadingWrapper>
      <ol>{subHeadings}</ol>
    </ListWrapper>
  );
}
