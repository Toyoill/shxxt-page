import React, { MouseEvent, useState } from "react";
import styled from "styled-components";

import HeadingWrapper from "./ContentWrapper/HeadingWrapper";
import Heading from "../Content/Heading";
import SubHeadingWrapper from "./ContentWrapper/SubHeadingWrapper";
import SubHeading from "../Content/SubHeading";
import Icon from "../Content/Icon";

import { Content } from "../../../../store/type";

interface Props {
  content: Content;
}

const ListWrapper = styled.li<{ open: boolean }>`
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

  const mouseUpHandler = (evt: MouseEvent) => {
    if (evt.button === 0) {
      setOpen((prev) => !prev);
    }
  };

  const subHeadings = content.subHeadings?.map((subHeading) => (
    <SubHeadingWrapper key={subHeading.data.idx}>
      <SubHeading>{subHeading.data.title}</SubHeading>
    </SubHeadingWrapper>
  ));

  return (
    <ListWrapper open={open}>
      <HeadingWrapper mouseUpHandler={mouseUpHandler}>
        <Icon open={open} />
        <Heading title={content.data.title} />
      </HeadingWrapper>
      <ol>{subHeadings}</ol>
    </ListWrapper>
  );
}
