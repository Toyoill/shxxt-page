import React, { MouseEvent, useEffect } from "react";
import styled from "styled-components";

import { useDispatch } from "react-redux";
import List from "./List";
import SubHeading from "../Content/SubHeading";
import SubHeadingWrapper from "./ContentWrapper/SubHeadingWrapper";

import { useAppSelector } from "../../../../store/hooks";
import { openContext } from "../../../../store/sidebar/contextReducer";
import EditBar from "./EditBar";
import { fetchData } from "../../../../store/sidebar/contentReducer";
import { AppDispatch } from "../../../../store/rootReducer";
import { select } from "../../../../store/sidebar/selectReducer";

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

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

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
        content={content}
        parentContextHandler={() => {}}
        parentSelected={false}
      >
        <SubHeading>{content.data.title}</SubHeading>
      </SubHeadingWrapper>
    );
  });

  const contextHandler = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(select(undefined));
    dispatch(openContext({ x: evt.pageX, y: evt.pageY }));
  };

  return (
    <Wrapper onContextMenu={contextHandler}>
      <EditBar />
      <MainWrapper>{main}</MainWrapper>
    </Wrapper>
  );
}
