import React, { MouseEvent } from "react";
import styled from "styled-components";

import List from "./List";
import SubHeading from "../Content/SubHeading";
import SubHeadingWrapper from "./ContentWrapper/SubHeadingWrapper";

import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import { openContext } from "../../../../store/sidebar/contextReducer";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MainWrapper = styled.ol`
  margin: 0;
  margin-top: 1rem;
  padding-inline: 0.5rem;
`;

export default function SidebarInner() {
  const contents = useAppSelector((state) => state.content.contents);
  const contextOpen = useAppSelector((state) => state.context.open);
  const dispatch = useAppDispatch();

  const main = contents.map((content) => {
    if (content.data.type === "Heading")
      return (
        <List
          key={content.data.idx}
          content={content}
          contextOpen={contextOpen}
        />
      );
    return (
      <SubHeadingWrapper
        key={content.data.idx}
        contextOpen={contextOpen}
        content={content}
        parentContextHandler={() => {}}
        parentSelected={false}
      >
        <SubHeading>{content.data.main}</SubHeading>
      </SubHeadingWrapper>
    );
  });

  const contextHandler = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(openContext({ x: evt.pageX, y: evt.pageY }));
  };

  return (
    <Wrapper onContextMenu={contextHandler}>
      <MainWrapper>{main}</MainWrapper>
    </Wrapper>
  );
}
