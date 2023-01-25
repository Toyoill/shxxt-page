import React, { MouseEvent } from "react";
import styled from "styled-components";

import { useAppDispatch } from "../../../../../store/hooks";
import { openContext } from "../../../../../store/sidebar/contextReducer";
import { select } from "../../../../../store/sidebar/selectReducer";
import { Content } from "../../../../../store/type";

interface Props {
  children: JSX.Element;
  content: Content;
  parentContextHandler: (evt: MouseEvent) => void | (() => void);
  parentSelected: boolean;
}

// border-radius: 5px;
// margin-top: 0.3rem;
// list-style-type: none;

const Wrapper = styled.li`
  list-style: none;

  & > div {
    border-radius: 5px;
    padding-block: 0.2rem;
    width: 100%;
  }

  & > div:hover {
    background-color: #cfcfcf;
  }
`;

export default function SubHeadingWrapper({
  children,
  content,
  parentContextHandler,
  parentSelected,
}: Props) {
  const dispatch = useAppDispatch();

  const selectHandler = () => {
    dispatch(
      select({
        type: "SubHeading",
        idx: content.data.idx,
        belong: content.data.belong,
      })
    );
  };

  const contextMenuHandler = (evt: MouseEvent) => {
    evt.preventDefault();
    evt.stopPropagation();
    selectHandler();
    dispatch(openContext({ x: evt.pageX, y: evt.pageY }));
  };

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Wrapper>
      <div
        onClick={()=>{
          // /Admin/:content.data.id
          console.log('click!')}
        }
        onContextMenu={
          parentSelected ? parentContextHandler : contextMenuHandler
        }
      >
        {children}
      </div>
    </Wrapper>
  );
}
