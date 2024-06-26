import { configureStore } from "@reduxjs/toolkit";

import contextReducer from "./sidebar/contextReducer";
import selectReducer from "./sidebar/selectReducer";
import contentReducer from "./sidebar/contentReducer";

const store = configureStore({
  reducer: {
    context: contextReducer,
    select: selectReducer,
    content: contentReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
