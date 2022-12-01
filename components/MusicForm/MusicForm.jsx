import s from "./MusicForm.module.css"
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {addMusic} from "../../redux/music-reducer";
import {v4} from "uuid";

const MusicForm = () => {
    const {register, reset, handleSubmit, formState:{isDirty, isValid}} = useForm()
    const dispatch = useDispatch()

    const onSubmit = (data) => {
        const music = {
            id: v4,
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
                <input type='text' placeholder="Artist(s)" {...register("artist", {required: true})}/>
                <input type='text' placeholder='Name' {...register("name", {required: true})}/>
                <button disabled={!isDirty || !isValid}>Add</button>
            </form>
        </>
    )
}

export default MusicForm