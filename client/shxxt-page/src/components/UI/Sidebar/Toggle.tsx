import React, { useState } from "react";
import styled from "styled-components";

interface Props {
  children: Array<JSX.Element>;
  title: string;
}

const ToggleBox = styled.li`
  list-style-type: none;
  margin: 0;
  margin-top: 0.8rem;

  & > button {
    padding: 0;
    border: none;
    background-color: #fff;
    font-size: inherit;
  }
`;

const ContentBox = styled.ul<{ isOpen: boolean }>`
  display: ${(props) => (props.isOpen ? "" : "none")};
  list-style-type: none;
  padding: 0;
`;

export default function Toggle({ children, title }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <ToggleBox>
      <button type="button" onClick={onClickHandler}>
        {title}
      </button>
      <ContentBox isOpen={isOpen}>{children}</ContentBox>
    </ToggleBox>
  );
}
