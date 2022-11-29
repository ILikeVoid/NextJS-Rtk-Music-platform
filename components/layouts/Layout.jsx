import s from './Layout.module.css'
import Image from "next/image";
import Link from "next/link";
import logo from './../../assets/Images/NovaLogo-2.png'


export const Layout = ({children}) => {
    return (
        <>
            <header className={s.header}>
                <div className={s.logo}>
                    <Link href="/"><Image src={logo} alt='logo'/></Link>
                </div>
                <nav className={s.nav}>
                    <Link href="/beats">Listening</Link>
                    <Link href="/artists">Artists</Link>
                    <Link href="/battle">Battle</Link>
                </nav>
            </header>
            <main className={s.content}>{children}</main>
        </>
    )
}