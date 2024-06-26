import React, { MouseEvent } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

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

  & > button {
    border: none;
    text-align: left;
    background-color: white;
    border-radius: 5px;
    padding-block: 0.4rem;
    width: 100%;
  }

  & > button:hover {
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
      <button
        type="button"
        onContextMenu={
          parentSelected ? parentContextHandler : contextMenuHandler
        }
      >
        <NavLink
          style={{ textDecoration: "none" }}
          to={`/Admin/${content.data.id}`}
        >
          {children}
        </NavLink>
      </button>
    </Wrapper>
  );
}
