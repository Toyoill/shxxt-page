import React from "react";
import styled from "styled-components";

const HomeContainer = styled.div({
  display: "flex",
  left: 0,
  width: "100%",
  height: 1000,
  backgroundColor: "#00a",
});

export default function Home() {
  return <HomeContainer />;
}
