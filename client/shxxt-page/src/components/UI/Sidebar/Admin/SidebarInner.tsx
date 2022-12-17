import React from "react";
import styled from "styled-components";

import List from "./List";
import SubHeading from "../Content/SubHeading";
import SubHeadingWrapper from "./ContentWrapper/SubHeadingWrapper";

import { useAppSelector } from "../../../../store/hooks";

const Wrapper = styled.div`
  width: 100%;

  & > ol {
    margin: 0;
    margin-top: 1rem;
    padding-inline: 0.5rem;
  }
`;

export default function SidebarInner() {
  const datas = useAppSelector((state) => state.content.datas);
  const contextOpen = useAppSelector((state) => state.context.open);

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

  return (
    <Wrapper>
      <ol>{contents}</ol>
    </Wrapper>
  );
}
