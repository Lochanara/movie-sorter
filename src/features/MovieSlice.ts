import { createSlice, PayloadAction } from "@reduxjs/toolkit";

//type for movie list
export interface MovieState {
  value: string[],
  sorted: boolean
}

//movie list
const initialState: MovieState = {
  //value: ["a","b","c","d","e"],
  value: [],
  sorted: false
};

//movie slice
export const MovieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action: PayloadAction<string>) => {
      state.value.push(action.payload);
    },
    removeMovie: (state, action: PayloadAction<string>) => {
      state.value = state.value.filter((value) => { 
        return value !== action.payload;
    })
    },
    swapMovies: (state, action: PayloadAction<number>) => {
      const tempFirstMovie = state.value[action.payload];
      state.value[action.payload] = state.value[action.payload + 1];
      state.value[action.payload + 1] = tempFirstMovie;
    },
    setSorted: (state, action: PayloadAction<boolean>) => {
      state.sorted = action.payload;
    },
  },
});

export const { addMovie, removeMovie, swapMovies, setSorted } = MovieSlice.actions;

export default MovieSlice.reducer;
