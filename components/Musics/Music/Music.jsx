import s from "./Music.module.css";

function Music({index, artist, name}) {

    let number = index + 1

    return (
        <div className={s.music}>
            <div className={s.music_id}><span>{number}</span></div>
            <div className={s.title}>
                <div className={s.name}><span>{name}</span></div>
                <div className={s.artist}><span>{artist}</span></div>
            </div>
        </div>

    )
}

export default Music