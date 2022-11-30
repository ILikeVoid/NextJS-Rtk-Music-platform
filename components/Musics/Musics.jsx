import s from './Musics.module.css'
import {useSelector} from "react-redux";
import Music from "./Music/Music";



const Musics = () => {
    const musics = useSelector((state) => state.music.musics)

    const musicElements = musics.map(m => <Music key={m.id} artist={m.artist} name={m.name}/>)

    console.log(musics)

    return (
        <div className={s.musics}>
            {musicElements}
        </div>
    )
}

export default Musics