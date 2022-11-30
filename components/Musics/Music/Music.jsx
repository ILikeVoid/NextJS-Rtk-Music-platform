import s from "../Musics.module.css";

function Music({artist, name}) {
    return (
        <div className={s.music}>
            <span>{artist}</span>
            <span>{name}</span>
        </div>

    )
}

export default Music