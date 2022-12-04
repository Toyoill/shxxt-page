import React, { useState } from "react";
import styled from "styled-components";

import useLongPress from "../../../../../util/useLongPress";

interface Props {
  title: string;
  children: JSX.Element | Array<JSX.Element>;
}

const CategoryContainer = styled.div<{
  longPressed: boolean;
}>`
  align-items: flex-start;
  background-color: ${(prop) => (prop.longPressed ? "#c1c1c1" : "#fff")};
  display: flex;
  justify-content: space-between;
  margin: 0.5rem;

  & > details {
    width: 100%;
  }

  & summary {
    cursor: pointer;
    justify-content: space-between;
    padding-block: 0.2rem;

    ${(prop) => (prop.longPressed ? "pointer-events: none" : "")};

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function Category({ title, children }: Props) {
  const [longPressed, setLongPressed] = useState(false);

  const { onMouseDown, onMouseLeave, onMouseUp } = useLongPress(() => {
    setLongPressed((prev) => !prev);
  }, 800);

  return (
    <CategoryContainer longPressed={longPressed}>
      <details>
        <summary
          onMouseDown={onMouseDown}
          onMouseLeave={onMouseLeave}
          onMouseUp={onMouseUp}
        >
          {title}
        </summary>

        {children}
      </details>
    </CategoryContainer>
  );
}
