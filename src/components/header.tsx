import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';


export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <Link href="/" passHref className={styles.logo}>
                <Image className={styles.logoImg} src="/images/logoHorizontal.svg" fill alt="Logo" />
            </Link>

            <ul className={styles.nav}>
                <li ><Link href="team" passHref className={styles.navLink}>Equipe</Link></li>
                <li ><Link href="story" passHref className={styles.navLink}>Historia</Link></li>
                <li ><Link href="projects" passHref className={styles.navLink}>Projetos</Link></li>
                <li ><Link href="researchs" passHref className={styles.navLink}>Pesquisas</Link></li>
                <li ><Link href="sponsors" passHref className={styles.navLink}>Patrocinadores</Link></li>
                <li ><Link href="help" passHref className={styles.navLink}>Ajude-nos</Link></li>

                <li ><Link href="joinus" passHref className={styles.navLink}>Processo Seletivo</Link></li>
                {/* <li ><Link href="contacts" className={styles.navLink}>Contatos</Link></li> */}
            </ul>

        </header>
    );
}