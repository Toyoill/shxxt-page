import React from "react";
import styled from "styled-components";
import SimpleLineIcon from "react-simple-line-icons";

const Container = styled.div({
  display: "flex",
  width: "80%",
  height: "40%",
  marginTop: "1rem",
  marginLeft: "auto",
  marginRight: "auto",
  backgroundColor: "transparent",
  // border: "2px solid black",
});

const ImageContainer = styled.div({
  width: "30%",
  height: "80%",
  marginLeft: "auto",
  marginRight: "auto",
  marginBottom: "auto",
  padding: "auto",
  // border: "2px solid black",
  textAlign: "center",
  fontSize: "48px",
});

const BoldText = styled.div({
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "0.5rem",
  fontWeight: "bold",
  fontSize: "20px",
  color: "#39383d",
});

const InfoText = styled(BoldText)`
  white-space: pre-wrap;
  width: 60%;
  font-weight: normal;
  font-size: 16px;
`;

function Features() {
  return (
    <Container>
      <ImageContainer>
        <SimpleLineIcon name="speedometer" size="Large" />
        <BoldText>빠릅니다</BoldText>
        <InfoText>
          시각화를 통한 작업으로 <br />
          로컬 데이터를 빠르게 <br />
          코드로 변환할 수 있습니다.
        </InfoText>
      </ImageContainer>
      <ImageContainer>
        <SimpleLineIcon name="cursor-move" size="Large" />
        <BoldText>동적입니다</BoldText>
        <InfoText>
          당연히 동적인게 맞는데,
          <br />
          아무튼 그렇습니다.
        </InfoText>
      </ImageContainer>
      <ImageContainer>
        <SimpleLineIcon name="emotsmile" size="Large" />
        <BoldText>행복해집니다</BoldText>
        <InfoText>
          幸せになれ～～
          <br />
          (행복해져라라는 뜻)
        </InfoText>
      </ImageContainer>
    </Container>
  );
}

export default Features;
