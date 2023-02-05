import React from "react";
import styled from "styled-components";

const EditBarWrapper = styled.div`
  align-items: center;
  background-color: #ffffff;
  bottom: 0;
  box-shadow: 0px 0px 8px rgb(0 0 0 / 10%);
  box-sizing: border-box;
  display: flex;
  height: 4rem;
  justify-content: right;
  left: 0;
  padding: 1rem;
  position: absolute;
  width: 100%;
  z-index: 9;
`;

const SaveButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: #12b886;
  color: white;
  cursor: pointer;
  font-weight: bolder;
  height: min-content;
  padding-block: 0.8rem;
  padding-inline: 1rem;
  margin: 0;

  &:hover {
    background-color: #5cd4b0;
  }
`;

interface Props {
  saving: boolean;
  savingHandler: Function;
}

export default function EditBar({ saving, savingHandler }: Props) {
  return (
    <EditBarWrapper>
      <SaveButton
        disabled={saving}
        onClick={() => {
          savingHandler();
        }}
      >
        저장하기
      </SaveButton>
    </EditBarWrapper>
  );
}
