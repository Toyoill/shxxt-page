import React from "react";
import styled from "styled-components";

import List from "./List";
import SubHeading from "../Content/SubHeading";
import SubHeadingWrapper from "./ContentWrapper/SubHeadingWrapper";

import { useAppSelector } from "../../../../store/hooks";

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

  const main = contents.map((content) => {
    if (content.data.type === "Heading")
      return <List key={content.data.idx} content={content} />;
    return (
      <SubHeadingWrapper key={content.data.idx}>
        <SubHeading>{content.data.title}</SubHeading>
      </SubHeadingWrapper>
    );
  });

  return (
    <Wrapper>
      <MainWrapper>{main}</MainWrapper>
    </Wrapper>
  );
}
