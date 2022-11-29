const ADD_MUSIC = 'ADD-MUSIC'

const initialState = {
    musics: [
        {id: 1, artist:"The Chainsmokers", name:"Closer"},
        {id: 2, artist:"Pnb Rock", name:"iPod"},
        {id: 3, artist:"Helsay", name:"Colors"},
        {id: 4, artist:"Nurkendrix", name:"Взлетаю"}
    ]
}

export const musicReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MUSIC:
            let newMusic = {
                id: 5,
                artist: action.newMusicArtist,
                name: action.newMusicName
            }
            return {
                ...state,
                musics: [...state.musics, newMusic],
            }
        default:
            return state
    }
}

export const addMusicSuccess = (newMusicArtist, newMusicName) => ({type: ADD_MUSIC, newMusicArtist, newMusicName})

