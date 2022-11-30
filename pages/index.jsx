import s from '../styles/Home.module.css'
import Head from "next/head";
import {FiSearch} from 'react-icons/fi'
import {useSelector} from "react-redux";
import {addMusic} from "../redux/music-reducer";
import Music from "../components/Music/Music";
import {useForm} from "react-hook-form"

const Home = () => {
    const {register, handleSubmit, formState: {errors}} = useForm()
    const music = useSelector((state) => state.music.musics)

    const onSubmit = (data) => console.log(data)

    return (
        <div className={s.home}>
            <Head>
                <title>NovaBeats | Home</title>
            </Head>
            <div>
                {/*<form className={s.form}>*/}
                {/*    <input type="text" placeholder="Search any track..."/>*/}
                {/*    <button><FiSearch size={20}/></button>*/}
                {/*</form>*/}
                <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
                    <input type='text' placeholder="Artist" {...register("artist")}/>
                    <input type='text' placeholder='Name' {...register("name", {required:true})}/>
                    {errors && <div>{errors.name}</div>}
                    <button>Submit</button>
                </form>
                {music.map(m => <Music key={m.id} name={m.name} artist={m.artist}/>)}
            </div>
        </div>
    )
}


export default Home
