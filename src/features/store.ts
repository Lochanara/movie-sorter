import { configureStore } from "@reduxjs/toolkit";
import moviesReducer from "../features/MovieSlice";

export const store = configureStore({
  // configuring reducers
  reducer: {
    movies: moviesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
