import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';


export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <Link href="/" passHref className={styles.logo}>
                <Image className={styles.logoImg} src="/images/logo_rocket.png" fill alt="Logo" />
                <div className={styles.nameDiv}>
                    <h1>UFABC</h1>
                    <h1>ROCKET DESIGN</h1>
                </div>
            </Link>

            <ul className={styles.nav}>
                <li ><Link href="a_entidade" passHref className={styles.navLink}>A ENTIDADE</Link></li>
                <li ><Link href="a_equipe" passHref className={styles.navLink}>A EQUIPE</Link></li>
                <li ><Link href="missoes" passHref className={styles.navLink}>MISSÕES</Link></li>
                <li ><Link href="noticias" passHref className={styles.navLink}>NOTÍCIAS</Link></li>
                <li ><Link href="apoio" passHref className={styles.navLink}>APOIO</Link></li>
            </ul>

        </header>
    );
}