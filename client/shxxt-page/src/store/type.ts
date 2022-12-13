import store from "./rootReducer";

export interface SelectedContent {
  type: "Heading" | "SubHeading";
  idx: number;
  belongs?: number;
}

export interface SelectState {
  selected: SelectedContent | boolean;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
