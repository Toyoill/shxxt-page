export interface Data {
  id: number;
  type: "Heading" | "SubHeading";
  idx: number;
  title: string;
  belong: number;
}

export interface UpdatedData {
  id: number;
  idx?: number;
  title?: string;
  belong?: number;
  removed?: boolean;
}
