import React, { useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import EditBar from "./EditBar";
import Sidebar from "../../../components/UI/Sidebar/Admin/SidebarWrapper";

const DocumentWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  height: 100vh;
  width: 84vw;
  padding-left: 16vw;
`;

const EditerWrapper = styled.div`
  flex: 1;
  padding-bottom: 4rem;
  position: relative;
  width: 42vw;

  & > textarea {
    background-color: #ffffff;
    border: none;
    box-sizing: border-box;
    font-family: sans-serif, "Nanum Gothic";
    font-size: 1rem;
    height: 100%;
    line-height: 1.5;
    outline: none;
    padding: 1rem;
    resize: none;
    width: inherit;
  }
`;

const MarkdownWrapper = styled.div`
  background-color: #f5f2ed;
  box-sizing: border-box;
  font-family: sans-serif, "Nanum Gothic";
  flex: 1;
  line-height: 1.5;
  overflow-y: scroll;
  padding: 1rem;
  width: 42vw;
  word-wrap: break-word;
`;

export default function Document() {
  const [article, setArticle] = useState("");

  const changeHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticle(evt.target.value);
  };

  const keyDownHandler = (evt: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (evt.key === "Tab") {
      setArticle((prev) => `${prev}\t`);
      evt.preventDefault();
    }
  };

  return (
    <DocumentWrapper>
      <Sidebar />
      <EditerWrapper>
        <textarea
          onChange={changeHandler}
          onKeyDown={keyDownHandler}
          placeholder="내용을 입력해주세요"
          value={article}
        />
        <EditBar />
      </EditerWrapper>
      <MarkdownWrapper>
        <div>
          <ReactMarkdown unwrapDisallowed>{article}</ReactMarkdown>
        </div>
      </MarkdownWrapper>
    </DocumentWrapper>
  );
}
