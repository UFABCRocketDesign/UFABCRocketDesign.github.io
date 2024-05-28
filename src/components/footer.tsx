import styles from './footer.module.scss';
import { InstagramIcon, TwitterIcon, LinkedinIcon } from '../components/icons'
import Link from 'next/link';
import Image from "next/image";

export default function Footer() {
    const linkInstagram:string = "https://www.instagram.com/ufabcrocketdesign/";
    const linkX:string = "https://twitter.com/UFABCRD";
    const linkLinkedIn:string = "https://www.linkedin.com/company/ufabc-rocket-design/";

    return (
        <footer className={styles.footer}>
            <div className={styles.socialIcons}>
                <Link href={linkInstagram} className={styles.socialIndIcon}><InstagramIcon /></Link>
                <Link href={linkX} className={styles.socialIndIcon}><TwitterIcon /></Link>
                <Link href={linkLinkedIn} className={styles.socialIndIcon}><LinkedinIcon /></Link>
            </div>
            <div className={styles.row}>
                <div className={styles.logo}>
                    <Link href="\" passHref className={styles.textLogo}><span className={styles.grupoLogo}><Image src="/images/logo_rocket_azul.png" fill alt="Logomarca UFABC Rocket Design" /> UFABC Rocket Design</span></Link>
                </div>
                <div className={styles.quote}>
                    <p className={styles.quoteText}>&quot;Per Aspera Ad Astra&quot;
                    </p>
                    <p className={styles.quoteAuthor}>Através das dificuldades, até as estrelas
                    </p>
                </div>
                <div className={styles.nav}>
                    <Link href='a_entidade' passHref className={styles.navItem}>A entidade</Link>
                    <Link href='a_equipe' passHref className={styles.navItem}>A equipe</Link>
                    <Link href='missoes' passHref className={styles.navItem}>Missões</Link>
                    <Link href='noticias' passHref className={styles.navItem}>Notícias</Link>
                    <Link href='apoio' passHref className={styles.navItem}>Apoio</Link>
                </div>
            </div>
            <div className={styles.credits}>
                <p> UFABC Rocket Design - Departamento de TI. All rights reserved.</p>
            </div>

        </footer>
    );
}