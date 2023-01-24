import React, { useState } from "react";
import styled from "styled-components";
import SimpleLineIcon from "react-simple-line-icons";
import axios from "axios";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { saveData } from "../../../../store/sidebar/contentReducer";

const EditContainer = styled.div<{ saving: boolean }>`
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
  const [saving, setSaving] = useState(false);
  const dispatch = useAppDispatch();
  const updatedDatas = useAppSelector((state) => state.content.updatedDatas);
  const newDatas = useAppSelector((state) => state.content.newDatas);

  const saveHandler = () => {
    setSaving(true);
    axios({
      method: "post",
      url: "http://localhost:4000/ref/save",
      data: {
        updatedDatas,
        newDatas,
      },
    })
      .then(() => {
        dispatch(saveData());
        // eslint-disable-next-line no-alert
        alert("저장 완료!");
      })
      .catch(() => {
        // eslint-disable-next-line no-alert
        alert("저장 실패!");
      })
      .finally(() => {
        setSaving(false);
      });
  };

  return (
    <EditContainer saving={saving}>
      <button type="button" onClick={saveHandler} disabled={saving}>
        <SimpleLineIcon name="cloud-upload" />
      </button>
    </EditContainer>
  );
}
