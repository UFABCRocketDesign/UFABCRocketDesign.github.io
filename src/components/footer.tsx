'use client'
import styles from './footer.module.scss';
import { InstagramIcon, TwitterIcon, LinkedinIcon } from '../components/icons'
import Link from 'next/link';
import Image from "next/image";
import { useEffect, useState } from 'react';

export default function Footer() {
    const linkInstagram:string = "https://www.instagram.com/ufabcrocketdesign/";
    const linkX:string = "https://twitter.com/UFABCRD";
    const linkLinkedIn:string = "https://www.linkedin.com/company/ufabc-rocket-design/";
    const [idEquipe, setIdEquipe] = useState<number|undefined>()
    const [idMembros, setIdMembros] = useState<number|undefined>()
    const [idApoio, setIdApoio] = useState<number|undefined>()
    const [offset, setOffset] = useState<number|undefined>()

    useEffect(() => {
        setIdEquipe(document.getElementById("A_EQUIPE")?.offsetTop)
        setIdMembros(document.getElementById("MEMBROS")?.offsetTop)
        setIdApoio(document.getElementById("APOIO")?.offsetTop)
        setOffset( window.innerHeight < window.innerWidth? window.innerWidth/40: window.innerWidth/20)
    }, []);

    return (
        <footer className={styles.footer}>
            <div className={styles.socialIcons}>
                <p>Siga-nos!</p>
                <Link href={linkInstagram} className={styles.socialIndIcon}><InstagramIcon /></Link>
                <Link href={linkX} className={styles.socialIndIcon}><TwitterIcon /></Link>
                <Link href={linkLinkedIn} className={styles.socialIndIcon}><LinkedinIcon /></Link>
            </div>
            <div className={styles.row}>
                <div className={styles.logo}>
                    <label onClick={() => scrollTo({top: 0, behavior:"smooth"})} className={styles.textLogo}><span className={styles.grupoLogo}><Image src="/images/logo_rocket_azul.png" fill alt="Logomarca UFABC Rocket Design" /> UFABC Rocket Design</span></label>
                </div>
                <div className={styles.quote}>
                    <p className={styles.quoteText}>&quot;Per Aspera Ad Astra&quot;
                    </p>
                    <p className={styles.quoteAuthor}>Através das dificuldades, até as estrelas
                    </p>
                </div>
                <div className={styles.nav}>
                    <label onClick={() => scrollTo({top: idEquipe&&offset? idEquipe - offset : 0, behavior:"smooth"})} className={styles.navLink}>A EQUIPE</label>
                    <label onClick={() => scrollTo({top: idMembros&&offset? idMembros - offset : 0, behavior:"smooth"})} className={styles.navLink}>MEMBROS</label>
                    <label style={{display: 'none'}} onClick={() => alert("Página em construção! Desculpe o transtorno")} className={styles.navLink}>MISSÕES</label>
                    <label style={{display: 'none'}} onClick={() => alert("Página em construção! Desculpe o transtorno")} className={styles.navLink}>NOTÍCIAS</label>
                    <label onClick={() => scrollTo({top: idApoio&&offset? idApoio - offset : 0, behavior:"smooth"})} className={styles.navLink}>APOIO</label>
                </div>
            </div>
            <div className={styles.credits}>
                <p>foguetes@ufabc.edu.br - UFABC Rocket Design - Feito orgulhosamente pelos nossos membros</p>
            </div>

        </footer>
    );
}