import Head from "next/head";
import s from "../styles/Home.module.css";
import MusicForm from "../components/MusicForm/MusicForm";
import Musics from "../components/Musics/Musics";

const Listen = () => {
    return (
        <div className={s.listen}>
            <Head>
                <title>NovaBeats | Listen</title>
            </Head>
            <div>
                <MusicForm />
                <Musics />
            </div>
        </div>
    )
}

export default Listen