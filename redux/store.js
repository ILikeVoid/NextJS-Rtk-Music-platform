import {configureStore} from "@reduxjs/toolkit";
import {musicSlice} from "./music-reducer";


let store = configureStore({
    reducer: {
        music: musicSlice.reducer
    }
})


export default store