import { configureStore } from "@reduxjs/toolkit";
import { favoriteReducer } from "./favorite-slice";

const store = configureStore({
    reducer: {
        favorite: favoriteReducer
    }
})

export default store;