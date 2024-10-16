'use client'
import styles from './header.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import React, {useEffect, useState} from 'react';

interface HeaderProps{
    menuStatus: boolean;
    setMenuStatus:any
}

export default function Header({menuStatus, setMenuStatus}: HeaderProps){
    const [idEquipe, setIdEquipe] = useState<number|undefined>()
    const [idMembros, setIdMembros] = useState<number|undefined>()
    const [idApoio, setIdApoio] = useState<number|undefined>()
    const [offset, setOffset] = useState<number|undefined>()

    useEffect(() => {
        setIdEquipe(document.getElementById("A_EQUIPE")?.offsetTop)
        setIdMembros(document.getElementById("MEMBROS")?.offsetTop)
        setIdApoio(document.getElementById("APOIO")?.offsetTop)
        setOffset( window.innerHeight < window.innerWidth? window.innerWidth/96: -window.innerWidth/96)
    }, []);
    return (
        <header className={styles.header}>
            <label onClick={() => scrollTo({top: 0, behavior:"smooth"})} className={styles.logo}>
                <Image onClick={() => setMenuStatus(false)} className={styles.logoImg} src="/images/logo_rocket.png" fill alt="Logo" />
                <div className={styles.nameDiv}>
                    <h1>UFABC</h1>
                    <h1>ROCKET DESIGN</h1>
                </div>
            </label>
            
            <ul className={styles.nav}>
                <li ><label onClick={() => scrollTo({top: idEquipe&&offset? idEquipe - offset : 0, behavior:"smooth"})} className={styles.navLink}>A EQUIPE</label></li>
                <li ><label onClick={() => scrollTo({top: idMembros&&offset? idMembros - offset : 0, behavior:"smooth"})} className={styles.navLink}>MEMBROS</label></li>
                <li ><label onClick={() => alert("Página em construção! Desculpe o transtorno")} className={styles.navLink}>MISSÕES</label></li>
                <li ><label onClick={() => alert("Página em construção! Desculpe o transtorno")} className={styles.navLink}>NOTÍCIAS</label></li>
                <li ><label onClick={() => scrollTo({top: idApoio&&offset? idApoio - offset : 0, behavior:"smooth"})} className={styles.navLink}>APOIO</label></li>
            </ul>

            <div className={styles.hamburgerMenu}>
                <Image src="/images/icone-menu.png" fill alt="menu de navegação" onClick={() => setMenuStatus(!menuStatus)} />
            </div>
            {menuStatus? 
                <div className={styles.blur} onClick={() => setMenuStatus(false)}>
                    <div className={styles.menuNav}>
                        <ul className={styles.menuNavList}>
                            <li ><label onClick={() => scrollTo({top: idEquipe&&offset? idEquipe - offset : 0, behavior:"smooth"})} className={styles.navLink}>A EQUIPE</label></li>
                            <li ><label onClick={() => scrollTo({top: idMembros&&offset? idMembros - offset : 0, behavior:"smooth"})} className={styles.navLink}>MEMBROS</label></li>
                            <li ><label onClick={() => alert("Página em construção! Desculpe o transtorno")} className={styles.navLink}>MISSÕES</label></li>
                            <li ><label onClick={() => alert("Página em construção! Desculpe o transtorno")} className={styles.navLink}>NOTÍCIAS</label></li>
                            <li ><label onClick={() => scrollTo({top: idApoio&&offset? idApoio - offset : 0, behavior:"smooth"})} className={styles.navLink}>APOIO</label></li>
                        </ul>
                    </div>
                </div>
                
            :
            <></>}
        </header>
    );
}