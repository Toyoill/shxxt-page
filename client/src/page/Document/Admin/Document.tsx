/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import { useParams } from "react-router";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import axios from "axios";

import EditBar from "./EditBar";
import Sidebar from "../../../components/UI/Sidebar/Admin/SidebarWrapper";

const DocumentWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: space-around;
  height: 100vh;
  width: 100vw - 18rem;
  padding-left: 18rem;
`;

const EditerWrapper = styled.div`
  flex: 1;
  box-shadow: 0px 0px 8px rgb(0 0 0 / 10%);
  padding-bottom: 4rem;
  position: relative;
  width: 50%;

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
    width: 100%;
  }
`;

const MarkdownWrapper = styled.div`
  background-color: #fbfdfc;
  box-sizing: border-box;
  font-family: sans-serif, "Nanum Gothic";
  flex: 1;
  line-height: 1.5;
  overflow-y: scroll;
  padding: 1rem;
  width: 50%;
  word-wrap: break-word;
`;

export default function Document() {
  const { id } = useParams();
  const [article, setArticle] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (id === undefined) return;
    axios.get(`http://localhost:4000/ref/article/${id}`).then((result) => {
      const { main } = JSON.parse(result.data);
      setArticle(main || "");
    });
  }, [id]);

  const savingHandler = () => {
    setSaving(true);
    axios
      .post(`http://localhost:4000/ref/article/${id}`, {
        contentId: id,
        main: article,
      })
      .then(() => {
        alert("success");
      })
      .catch(() => {
        alert("fail");
      })
      .finally(() => {
        setSaving(false);
      });
  };

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const changeHandler = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setArticle(evt.target.value);
  };

  const keyDownHandler = (e: React.KeyboardEvent) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const { value, selectionStart, selectionEnd } = textareaRef.current!;
      textareaRef.current!.value = `${value.substring(
        0,
        selectionStart
      )}  ${value.substring(selectionEnd)}`;
      textareaRef.current!.selectionStart =
        selectionEnd + 2 - (selectionEnd - selectionStart);
      textareaRef.current!.selectionEnd =
        selectionEnd + 2 - (selectionEnd - selectionStart);
    }
  };

  return (
    <DocumentWrapper>
      <Sidebar />
      <EditerWrapper>
        <textarea
          ref={textareaRef}
          onChange={changeHandler}
          onKeyDown={keyDownHandler}
          placeholder="내용을 입력해주세요"
          value={article}
        />
        <EditBar saving={saving} savingHandler={savingHandler} />
      </EditerWrapper>
      <MarkdownWrapper>
        <div>
          <ReactMarkdown
            components={{
              // eslint-disable-next-line react/no-unstable-nested-components
              code({ node, inline, className, children, style, ...props }) {
                const match = /language-(\w+)/.exec(className || "");
                return !inline && match ? (
                  <SyntaxHighlighter
                    language={match[1]}
                    style={dracula}
                    {...props}
                  >
                    {String(children).replace(/\n$/, "")}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              },
            }}
            unwrapDisallowed
          >
            {article}
          </ReactMarkdown>
        </div>
      </MarkdownWrapper>
    </DocumentWrapper>
  );
}
