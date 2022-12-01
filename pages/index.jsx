import s from '../styles/Home.module.css'
import Head from "next/head";
import Musics from "../components/Musics/Musics";
import MusicForm from "../components/MusicForm/MusicForm";


const Home = () => {

    return (
        <div className={s.home}>
            <Head>
                <title>NovaBeats | Home</title>
            </Head>

        </div>
    )
}


export default Home
