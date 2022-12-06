import React from "react";
import styled from "styled-components";

const Image = styled.img({
  src: "https://pbs.twimg.com/media/FXXmyjrUIAUfXu1?format=jpg&name=medium",
});

function GuidePage() {
  return (
    <div>
      <p>짱구야, 가이드 가르쳐 준다며.</p>
      <Image />
      <strong>아빠를 속인거니?</strong>
    </div>
  );
}

export default GuidePage;
