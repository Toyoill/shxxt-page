export interface Selected {
  type: "Heading" | "SubHeading";
  idx: number;
  belongs?: number;
}

export interface SelectState {
  selected: Selected | boolean;
}

export interface Pos {
  x: number;
  y: number;
}
