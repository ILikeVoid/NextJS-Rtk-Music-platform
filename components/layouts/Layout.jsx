import s from './Layout.module.css'
import Image from "next/image";
import Link from "next/link";
import logo from './../../assets/Images/NovaLogo-2.png'


export const Layout = ({children}) => {
    return (
        <>
            <header className={s.header}>
                <div className={s.logo}>
                    <Link href="/"><Image priority={true} src={logo} alt='logo'/></Link>
                </div>
                <nav className={s.nav}>
                    <Link href="/listen">Listen</Link>
                    <Link href="/artists">Artists</Link>
                    <Link href="/battle">Battle</Link>
                </nav>
            </header>
            <main className={s.child}>{children}</main>
        </>
    )
}