import React from "react";
import styled from "styled-components";

const SelectButton = styled.select`
  border: none;
  border-radius: 5px;
  background-color: #12b886;
  color: white;
  width: 6rem;
  height: 1.7rem;
`;

export default function FontSelectButton() {
  return (
    <SelectButton>
      <option value="1">맑은 고딕</option>
      <option value="2">돋움체</option>
      <option value="3">굴림체</option>
      <option value="4">명조체</option>
      <option value="5">궁서체</option>
      <option value="6">그런체</option>
      <option value="7">저런체</option>
    </SelectButton>
  );
}
