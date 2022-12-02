import React from "react";
import styled from "styled-components";

const EditBarContainer = styled.div`
  background-color: #e4e4e4;
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;

  & > button {
    background-color: #8b8b8b;
    border: 0;
    border-radius: 0.2rem;
    color: white;
    cursor: pointer;
    height: 1.5rem;
    margin-block: 0.2rem;
    margin-inline: 0.5rem;
    width: 1.5rem;

    &:hover {
      background: black;
    }
  }
`;

export default function EditBar() {
  return (
    <EditBarContainer>
      <button type="button">+</button>
      <button type="button">-</button>
    </EditBarContainer>
  );
}
