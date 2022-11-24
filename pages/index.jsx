import s from '../styles/Home.module.css'
import Head from "next/head";

const Home = () => {

    return (
        <>
            <Head>
                <title>NovaBeats | Home</title>
            </Head>
            <div className={s.search}>

                <input className='border-2' placeholder="Search for anything..." type="text" name="search"/>
            </div>
        </>
    )
}

export default Home