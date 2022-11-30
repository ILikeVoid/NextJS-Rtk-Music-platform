import s from './Music.module.css'

const Music = ({name, artist}) => {
    return (
        <div className={s.music}>
            <span>{artist}</span>
            <span>{name}</span>
        </div>
    )
}

export default Music