export interface Selected {
  type: "Heading" | "SubHeading";
  idx: number;
  belongs?: number;
  updateId?: number;
}

export interface SelectState {
  selected: Selected | undefined;
}

export interface Pos {
  x: number;
  y: number;
}

export interface Data {
  type: "Heading" | "SubHeading";
  idx: number;
  main: string;
  belongTo?: number;
}

export interface Content {
  data: Data;
  subHeadings: Array<Content>;
  updateId?: number;
}

export interface ContentState {
  contents: Array<Content>;
  updatedContents: Array<Content>;
  updateId: number;
}
