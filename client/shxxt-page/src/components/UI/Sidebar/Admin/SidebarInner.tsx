import React, { MouseEvent } from "react";
import styled from "styled-components";

import List from "./List";
import SubHeading from "../Content/SubHeading";
import SubHeadingWrapper from "./ContentWrapper/SubHeadingWrapper";

import { useAppSelector, useAppDispatch } from "../../../../store/hooks";
import {
  openContext,
  closeContext,
} from "../../../../store/sidebar/contextReducer";
import OutsideClickWrapper from "../../../FunctionalWrapper/OutsideClickWrapper";

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
  const datas = useAppSelector((state) => state.content.datas);
  const contextOpen = useAppSelector((state) => state.context.open);

  const dispatch = useAppDispatch();

  const contents = datas.map((data) => {
    if (data.type === "Heading")
      return <List key={data.idx} content={data} contextOpen={contextOpen} />;
    return (
      <SubHeadingWrapper
        key={data.idx}
        contextOpen={contextOpen}
        parentContextHandler={() => {}}
        parentSelected={false}
        idx={data.idx}
        belongTo={data.belongTo}
      >
        <SubHeading>{data.main}</SubHeading>
      </SubHeadingWrapper>
    );
  });

  const contextHandler = (evt: MouseEvent) => {
    evt.preventDefault();
    dispatch(openContext({ x: evt.pageX, y: evt.pageY }));
  };

  const outsideClickHandler = () => {
    dispatch(closeContext());
  };

  return (
    <Wrapper onContextMenu={contextHandler}>
      <OutsideClickWrapper check outsideClickHandler={outsideClickHandler}>
        <MainWrapper>{contents}</MainWrapper>
      </OutsideClickWrapper>
    </Wrapper>
  );
}
