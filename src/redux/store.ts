import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import rootReducer from "./reducers/rootReducer";
import initialState from "./initial-state";

// redux-persist removed in Phase 4 (Q1): its whitelist was empty, so it never
// persisted anything. The store is now a plain configureStore.
export const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
