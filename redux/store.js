import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {musicReducer} from "./music-reducer"

const reducers = combineReducers({
    musicPage: musicReducer
})

let store = configureStore({
    reducer: reducers
})


export default store