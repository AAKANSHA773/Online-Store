import { configureStore } from "@reduxjs/toolkit";

import favoritesReducer from "./favoritesSlice"
const appStore = configureStore({
  reducer: {
    favorites: favoritesReducer
  },
});

export default appStore;
