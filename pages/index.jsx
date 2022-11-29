import s from '../styles/Home.module.css'
import Head from "next/head";
import {useForm} from "react-hook-form";
import {FiSearch} from 'react-icons/fi'
import {connect} from "react-redux";
import {addMusicSuccess} from "../redux/music-reducer";
import {compose} from "@reduxjs/toolkit";

const Home = () => {

    const {handleSubmit, register, formState:{errors}} = useForm()

    const onSubmit = (data) => {
        alert(`Search ${data.track}`)
    }

    return (
        <div className={s.home}>
            <Head>
                <title>NovaBeats | Home</title>
            </Head>
            <div>
                <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                    <input {...(register("track", {required: "error"}))}
                           type="text"
                           placeholder="Search any track..."/>
                    <button><FiSearch size={20}/></button>
                    {errors.track && <div style={{color:"red"}}>{errors.track.message}</div>}
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>({
    musics: state.musicPage.musics
})

export default compose(connect(mapStateToProps, {addMusicSuccess})(Home))
