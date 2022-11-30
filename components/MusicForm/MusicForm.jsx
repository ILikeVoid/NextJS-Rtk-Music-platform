import s from "./MusicForm.module.css"
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {addMusic} from "../../redux/music-reducer";
import artists from "../../pages/artists";

const MusicForm = () => {
    const {register, reset, handleSubmit, formState: {errors}} = useForm()
    const dispatch = useDispatch()
    const musics = useSelector((state) => state.music.musics)

    const musicId = Number(musics.slice(-1).map((value) => value.id)) + 1

    const onSubmit = (data) => {
        const music = {
            id: musicId,
            artist: data.artist,
            name: data.name
        }
        dispatch(addMusic(music))
        reset((formValues) => ({
            ...formValues,
            artist: "",
            name: ""
        }))
    }

    return (
        <>
            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                <input type='text' placeholder="Artist" {...register("artist", {required: true})}/>
                <input type='text' placeholder='Name' {...register("name", {required: true})}/>
                <button>Submit</button>
            </form>
        </>
    )
}

export default MusicForm