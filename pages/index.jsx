import s from '../styles/Home.module.css'
import Head from "next/head";
import Musics from "../components/Musics/Musics";

const Home = () => {

    return (
        <div className={s.home}>
            <Head>
                <title>NovaBeats | Home</title>
            </Head>
            <div className={s.description}>
                <div>bal</div>
                <Musics/>
                <Musics/>
            </div>
        </div>
    )
}


export default Home
