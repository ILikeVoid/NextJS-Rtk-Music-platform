import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    musics: [
        {id: 1, artist:"The Chainsmokers", name:"Closer"},
        {id: 2, artist:"Pnb Rock", name:"iPod"},
        {id: 3, artist:"Helsay", name:"Colors"},
        {id: 4, artist:"Nurkendrix", name:"Взлетаю"}
    ]
}

export const musicSlice = createSlice({
    name: "music",
    initialState,
    reducers: {
        addMusic: (state, action) => {
            state.musics.push(action.payload)
            }
        }
    }
)

export const {addMusic} = musicSlice.actions
export default musicSlice.reducer