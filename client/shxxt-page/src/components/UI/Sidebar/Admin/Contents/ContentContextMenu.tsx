import React from "react";

import ContextMenu from "../../../ContextMenu";

interface Props {
  posX: number;
  posY: number;
}

export default function ContentContextMenu({ posX, posY }: Props) {
  <ContextMenu posX={posX} posY={posY}>
    test
  </ContextMenu>;
}
