import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
    name: 'favoriteSlice',
    initialState: {
        ids: []
    },
    reducers: {
        addFavoriteList(state, action) {
            state.ids.push(action.payload.id)
        },
        removeItemFavoriteList(state, action) {
            state.ids.splice(state.ids.indexOf(action.payload.id), 1)
        }
    }
})

export const favoriteActions = favoriteSlice.actions;
export const favoriteReducer = favoriteSlice.reducer;
