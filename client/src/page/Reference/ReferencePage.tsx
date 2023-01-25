/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";
import SyntaxHighlighter from "react-syntax-highlighter";
import Sidebar from "../../components/UI/Sidebar/Client/SidebarWrapper";

const MarkdownWrapper = styled.div`
  background-color: #f5f2ed;
  box-sizing: border-box;
  font-family: sans-serif, "Nanum Gothic";
  flex: 1;
  line-height: 1.5;
  overflow-y: scroll;
  padding: 6rem;
  width: 100%;
  word-wrap: break-word;
`;

export default function ReferencePage() {
  const article = `Here is some JavaScript code:
  ~~~js
  console.log('It works!')
  ~~~
  `;
  return (
    <div>
      <Sidebar />
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
                    PreTag="div"
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
    </div>
  );
}
