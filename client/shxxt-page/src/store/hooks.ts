import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./rootReducer";

// Usage
// const value = useAppSelector(state => state.reducerName.value)
// const dispatch  = useAppDispatch()
// ...
// dispatch(someAction)

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
