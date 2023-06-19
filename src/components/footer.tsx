import styles from './footer.module.scss';
import { InstagramIcon, FacebookIcon, TwitterIcon, LinkedinIcon, YoutubeIcon } from '../components/icons'
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.socialIcons}>
                <div className={styles.socialIndIcon}><InstagramIcon /></div>
                <div className={styles.socialIndIcon}><FacebookIcon /></div>
                <div className={styles.socialIndIcon}><TwitterIcon /></div>
                <div className={styles.socialIndIcon}><LinkedinIcon /></div>
                <div className={styles.socialIndIcon}><YoutubeIcon /></div>
            </div>
            <div className={styles.row}>
                <div className={styles.logo}>
                    <Link href="\" passHref className={styles.textLogo}><span>UFABC Rocket Design</span></Link>
                </div>
                <div className={styles.quote}>
                    <p className={styles.quoteText}>&quot;Alguma frase bonita&quot;
                    </p>
                    <p className={styles.quoteAuthor}>- Buscando
                    </p>
                </div>
                <div className={styles.nav}>
                    <Link href='team' passHref className={styles.navItem}>Quem somos</Link>
                    <Link href='' passHref className={styles.navItem}>Pesquisa</Link>
                    <Link href='' passHref className={styles.navItem}>Impacto</Link>
                    <Link href='' passHref className={styles.navItem}>Atuação</Link>
                </div>
            </div>
            <div className={styles.credits}>
                <p> Freedxm Development. All rights reserved.</p>
            </div>

        </footer>
    );
}