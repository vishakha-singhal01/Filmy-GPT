import { createSlice } from "@reduxjs/toolkit";

const MoviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
    },
    reducers: {
        addNowPlayingMovies: (state,action) =>{
            state.nowPlayingMovies = action.payload;
        }
    }
});

export const {addNowPlayingMovies} = MoviesSlice.actions;
export default MoviesSlice.reducer;