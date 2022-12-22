import React from "react";
import styled from "styled-components";

const EditBarWrapper = styled.div`
  background-color: #ffffff;
  bottom: 0;
  box-shadow: 0px 0px 8px rgb(0 0 0 / 10%);
  height: 4rem;
  left: 0;
  position: fixed;
  width: inherit;
  z-index: 10;
`;

export default function EditBar() {
  return <EditBarWrapper />;
}
