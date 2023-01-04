import React from "react";
import styled from "styled-components";
import SimpleLineIcon from "react-simple-line-icons";

const EditContainer = styled.div`
  background-color: #bdbdbd;
  border: 1px solid #acacac;
  border-radius: 3px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  margin-block: 0.5rem;
  padding-block: 0.3rem;
  width: 100%;

  & > button {
    cursor: pointer;
  }
`;

export default function EditBar() {
  const saveHandler = () => {
    console.log("print...");

    console.log("...end");
  };

  return (
    <EditContainer>
      <button type="button">
        <SimpleLineIcon name="cloud-upload" onClick={saveHandler} />
      </button>
    </EditContainer>
  );
}
