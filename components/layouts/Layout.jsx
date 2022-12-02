import s from './Layout.module.css'
import Image from "next/image";
import Link from "next/link";
import logo from './../../assets/Images/NovaLogo-2.png'
import {useRouter} from "next/router";


export const Layout = ({children}) => {
    const router = useRouter()

    return (
        <>
            <header id='header' className={s.header}
                    style={{
                        backgroundColor: router.route === "/" ? "" : "white",
                        color: router.route === "/" ? "#736d73" : "#736d73"
                    }}>
                <div className={s.logo}>
                    <Link href="/"><Image priority={true} src={logo} alt='logo'/></Link>
                </div>
                <nav className={s.nav}>
                    <Link href="/listen">Listen</Link>
                    <Link href="/artists">Artists</Link>
                    <Link href="/battle">Battle</Link>
                </nav>
            </header>
            <main>{children}</main>
        </>

    )
}

