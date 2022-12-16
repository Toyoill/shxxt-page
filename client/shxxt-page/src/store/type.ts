import store from "./rootReducer";

export interface Selected {
  type: "Heading" | "SubHeading";
  idx: number;
  belongs?: number;
}

export interface SelectState {
  selected: Selected | boolean;
}

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
