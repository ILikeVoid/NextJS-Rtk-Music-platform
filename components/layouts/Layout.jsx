import s from './Layout.module.css'
import Link from "next/link";

export const Layout = ({children}) => {
    return (
        <>
            <nav className={s.nav}>
                <Link href="/beats">Beats</Link>
            </nav>
            <main>{children}</main>
        </>
    )
}