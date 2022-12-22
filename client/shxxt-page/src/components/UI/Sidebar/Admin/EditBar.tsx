import React from "react";
import styled from "styled-components";
import SimpleLineIcon from "react-simple-line-icons";

import { useAppSelector } from "../../../../store/hooks";

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
  const updated = useAppSelector((state) => state.content.updatedContents);

  const saveHandler = () => {
    console.log("print...");
    for (let idx = 0; idx < updated.length; idx += 1) {
      console.log(updated[idx].data, updated[idx].updateId);
    }
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
