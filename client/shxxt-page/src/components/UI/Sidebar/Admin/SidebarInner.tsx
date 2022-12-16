import React, { useEffect, useState } from "react";
import styled from "styled-components";

import SidebarData, { Content } from "../data/sidebarData";
import List from "./List";
import SubHeading from "../Content/SubHeading";
import SubHeadingWrapper from "./ContentWrapper/SubHeadingWrapper";

const Wrapper = styled.div`
  width: 100%;

  & > ol {
    margin: 0;
    margin-top: 1rem;
    padding-inline: 0.5rem;
  }
`;

export default function SidebarInner() {
  const [datas, setDatas] = useState<Array<Content>>([]);

  const updateHandler = () => setDatas(SidebarData.getData());

  useEffect(() => {
    updateHandler();
  }, []);

  const addHandler = (type: "Heading" | "SubHeading") => {
    SidebarData.addContent(type);
    updateHandler();
  };

  if (false) addHandler("Heading");

  const contents = datas.map((data) => {
    if (data.type === "Heading") return <List key={data.idx} content={data} />;
    return (
      <SubHeadingWrapper
        key={data.idx}
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
