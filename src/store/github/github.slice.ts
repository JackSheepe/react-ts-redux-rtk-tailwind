import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InfRepo } from "../../models/models";

const LS_FAV_Key = "rfk";

interface GithubState {
  favourites: InfRepo[];
}

const initialState: GithubState = {
  favourites: JSON.parse(localStorage.getItem(LS_FAV_Key) ?? "[]"),
};

export const githubSlice = createSlice({
  name: "github",
  initialState,
  reducers: {
    addFavourite(state, action: PayloadAction<InfRepo>) {
      state.favourites.push(action.payload);
      localStorage.setItem(LS_FAV_Key, JSON.stringify(state.favourites));
    },
    removeFavourite(state, action: PayloadAction<InfRepo>) {
      state.favourites = state.favourites.filter(
        (f) => f.id !== action.payload.id
      );
      localStorage.setItem(LS_FAV_Key, JSON.stringify(state.favourites));
    },
  },
});

export const githubActions = githubSlice.actions;
export const githubReducer = githubSlice.reducer;
