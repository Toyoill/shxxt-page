import React from "react";

import Category from "./Contents/Category";
import Subject from "./Contents/Subject";

export default function SideBarContents() {
  return (
    <>
      <Category title="Awesome Category">
        <Subject>Awesome Subject</Subject>
      </Category>
      <Category title="Awesome Category">
        <Subject>Awesome Subject</Subject>
      </Category>
    </>
  );
}
