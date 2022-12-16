import { configureStore } from "@reduxjs/toolkit";

import contextReducer from "./sidebar/contextReducer";

const store = configureStore({
  reducer: {
    context: contextReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
