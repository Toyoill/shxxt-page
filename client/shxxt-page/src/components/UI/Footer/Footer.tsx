import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #c9b98f;
  text-align: center;
  color: grey;
  font-size: 14px;
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    flex-direction: column;
  }
  div {
    position: relative;
  }
  p {
    margin-top: 3px;
    margin-bottom: 2px;
  }
  a {
    text-decoration: none;
    color: grey;
    &:hover,
    &:active {
      color: #0c0008;
    }
  }
`;

function Footer() {
  return (
    <FooterContainer>
      <div className="wrapper">
        <p>
          <span>내가 만든 똥같은 표에 날개를 달아주는 </span>
          <a
            href="https://github.com/Toyoill/Shxxt-Maker"
            target="_blank"
            rel="noreferrer"
          >
            shxxt-maker
          </a>
          <span> 입니다.</span>
        </p>
        <p>Copyright가 있는 척 채워봅니다. 언젠간 생기겠지...</p>
      </div>
    </FooterContainer>
  );
}
export default Footer;
