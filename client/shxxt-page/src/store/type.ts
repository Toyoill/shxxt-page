export interface Selected {
  type: "Heading" | "SubHeading";
  idx: number;
  belong: number;
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
}

export interface UpdatedData {
  id: number;
  idx?: number;
  title?: string;
  belong?: number;
  removed?: boolean;
}

// updateId === -1 : removed
export interface ContentState {
  contents: Array<Content>;

  newDatas: Array<Data>;
  updatedDatas: Array<UpdatedData>;

  contentId: number;

  saving: boolean;
}
