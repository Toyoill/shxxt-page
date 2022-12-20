import React, { useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const DocumentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100%;
  width: 100vw;

  & > textarea {
    background-color: #fff;
    border: 1px solid black;
    font-family: sans-serif, "Nanum Gothic";
    height: 80vh;
    margin-top: 5vh;
    padding: 1rem;
    resize: none;
    width: 40vw;
  }
`;

const MarkdownWrapper = styled.div`
  background-color: #fff;
  border: 1px solid black;
  font-family: sans-serif, "Nanum Gothic";
  height: 80vh;
  margin-top: 5vh;
  padding: 1rem;
  width: 40vw;
  word-wrap: break-word;
`;

export default function Document() {
  const [article, setArticle] = useState("");

  const changeHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticle(evt.target.value);
  };

  return (
    <DocumentWrapper>
      <textarea onChange={changeHandler} />
      <MarkdownWrapper>
        <ReactMarkdown unwrapDisallowed>{article}</ReactMarkdown>
      </MarkdownWrapper>
    </DocumentWrapper>
  );
}
