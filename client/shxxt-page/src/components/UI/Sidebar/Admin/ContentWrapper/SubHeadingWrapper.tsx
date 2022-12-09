import React from "react";
import styled, { CSSObject } from "styled-components";

import LongPressWrapper from "../../../../FunctionalWrapper/LongPressWrapper";

interface Props {
  children: JSX.Element;
}

const Wrapper = styled.li`
  list-style: none;
  width: 100%;
`;

export default function SubHeadingWrapper({ children }: Props) {
  const defaultStyle: CSSObject = {
    borderRadius: "5px",
    height: "100%",
    paddingBlock: "0.2rem",
    width: "100%",
  };
  const eventStyle: CSSObject = {
    backgroundColor: "#cbcbcb",
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper>
      <LongPressWrapper defaultStyle={defaultStyle} eventStyle={eventStyle}>
        {children}
      </LongPressWrapper>
    </Wrapper>
  );
}
