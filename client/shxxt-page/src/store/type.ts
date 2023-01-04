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
  id: number;
  type: "Heading" | "SubHeading";
  idx: number;
  title: string;
  belong: number;
}

export interface Content {
  data: Data;
  subHeadings: Array<Content>;
  updateId?: number;
}

// updateId === -1 : removed
export interface ContentState {
  contents: Array<Content>;
  updatedContents: Array<Content>;
  contentId: number;
  updateId: number;
}
