import React from "react";
import styled from "styled-components";
import SimpleLineIcon from "react-simple-line-icons";
import axios from "axios";
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
  const updatedDatas = useAppSelector((state) => state.content.updatedDatas);
  const newDatas = useAppSelector((state) => state.content.newDatas);

  const saveHandler = async () => {
    await axios({
      method: "post",
      url: "http://localhost:4000/ref/save",
      data: {
        updatedDatas,
        newDatas,
      },
    });
  };

  return (
    <EditContainer>
      <button type="button">
        <SimpleLineIcon name="cloud-upload" onClick={saveHandler} />
      </button>
    </EditContainer>
  );
}
