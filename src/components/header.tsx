import styles from './header.module.scss';
import Link from 'next/link';


export default function Header(): JSX.Element {
    return (
        <header className={styles.header}>
            <Link href="/" passHref className={styles.logo}>

                {/* TODO: Inserir a logo SVG aqui */}
                <span>UFABC Rocket Design</span>
            </Link>

            <ul className={styles.nav}>
                <li ><Link href="projects" passHref className={styles.navLink}>Projetos</Link></li>
                <li ><Link href="researchs" passHref className={styles.navLink}>Pesquisas</Link></li>
                <li ><Link href="sponsors" passHref className={styles.navLink}>Patrocinadores</Link></li>
                <li ><Link href="team" passHref className={styles.navLink}>Quem Somos</Link></li>
                <li ><Link href="joinus" passHref className={styles.navLink}>Processo Seletivo</Link></li>
                {/* <li ><Link href="contacts" className={styles.navLink}>Contatos</Link></li> */}
            </ul>

        </header>
    );
}