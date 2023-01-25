import React from "react";
import styled from "styled-components";

import LongPressWrapper from "../../../../FunctionalWrapper/LongPressWrapper";

interface Props {
  children: JSX.Element;
}

const Wrapper = styled.li`
  border-radius: 5px;
  padding-block: 0.2rem;
  width: 100%;
  list-style: none;

  & > button {
    border: none;
    text-align: left;
    background-color: white;
    border-radius: 5px;
    padding-block: 0.2rem;
    width: 100%;
  }

  & > button:hover {
    background-color: #cfcfcf;
  }
`;

export default function SubHeadingWrapper({ children }: Props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper>
      <button
        type="button"
        onClick={() => {
          // /Admin/:content.data.id
          console.log("click!");
        }}
      >
        <LongPressWrapper>{children}</LongPressWrapper>
      </button>
    </Wrapper>
  );
}
