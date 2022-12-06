import React from "react";
import styled from "styled-components";
import Example from "./Example";
import Button from "../../components/UI/Button";
import Features from "./Feature";

const ContentContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  padding: "10rem",
  width: "100%",
  height: "1000px",
  backgroundColor: "#F5F2ED",
});

const TitleText = styled.div({
  marginTop: "2rem",
  marginLeft: "auto",
  marginRight: "auto",
  fontWeight: "bold",
});

const Info = styled.div({
  // padding: "10rem",
  marginLeft: "auto",
  marginRight: "auto",
  fontWeight: "bold",
  fontSize: "20px",
  color: "#000000",
});

const BlueText = styled(TitleText)`
  color: #03d4fe;
  font-size: 72px;
`;

const GreyText = styled(TitleText)`
  color: #39383d;
  font-size: 48px;
`;

export default function Content() {
  return (
    <ContentContainer>
      <BlueText>Shxxt-Maker</BlueText>
      <Info>데이터 관리를 더 쉽게.</Info>
      <Example />
      <Button title="Install 1.0.0" />
      <GreyText>Features</GreyText>
      <Features />
      <GreyText>로컬 데이터의 빠른 코드 변환, 지금 당장 시작하세요.</GreyText>
      <Button title="Get Started!" />
    </ContentContainer>
  );
}
