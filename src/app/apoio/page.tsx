'use client'
import { Metadata } from 'next';

import styles from '../../styles/apoio.module.scss'
import { ParalelogramoApoio } from '@/components/paralelogramo_apoio/paralelogramo_apoio';
import { CardApoio } from '@/components/card_apoio/card_apoio';
import { useEffect, useState } from "react";
import apoio_api from '@/drive/getApoio';
import parseCSV from '@/drive/parseCSV';
// Beginning of page with the current project featured, followed by a list of all projects

// import  {sponsors} from '../../../data/sponsors.json'

interface Apoiador{
    nome : string;
    nivel : string;
    link_do_site: string;
    link_do_logo: string;
}

export default function Sponsors() {

    const [apoiadores, setApoiadores] : any = useState([{nome:'', nivel:'', link_do_site:'', link_do_logo:''}])

    useEffect(()=>{
        apoio_api.get('').then(res => setApoiadores(parseCSV(res.data)))
    },[])

    return (<>
        <div className={styles.container}>
            <h1 className={styles.title}>Quem nos impulsiona</h1>
            <section className={styles.conteudo}>
                <div className={styles.secaoapoio}>
                    <ParalelogramoApoio nivel='diamante' cor='#0abab5'/>
                    <div className={styles.cards}>
                        {apoiadores.map((card:Apoiador) => card.nivel == 'Diamante' ? 
                        <>
                            <CardApoio nome={card.nome} logo={card.link_do_logo} link={card.link_do_site}/>
                        </> : '')}
                    </div>
                </div>
                <div className={styles.secaoapoio}>
                    <ParalelogramoApoio nivel='ouro' cor='#daa520'/>
                    <div className={styles.cards}>
                        {apoiadores.map((card:Apoiador) => card.nivel == 'Ouro' ? 
                            <>
                                <CardApoio nome={card.nome} logo={card.link_do_logo} link={card.link_do_site}/>
                            </> : '')}
                    </div>
                </div>
                <div className={styles.secaoapoio}>
                    <ParalelogramoApoio nivel='prata' cor='#979ea8'/>
                    <div className={styles.cards}>
                        {apoiadores.map((card:Apoiador) => card.nivel == 'Prata' ? 
                            <>
                                <CardApoio nome={card.nome} logo={card.link_do_logo} link={card.link_do_site}/>
                            </> : '')}
                    </div>
                </div>
                <div className={styles.secaoapoio}>
                    <ParalelogramoApoio nivel='bronze' cor='#c8682b'/>
                    <div className={styles.cards}>
                        {apoiadores.map((card:Apoiador) => card.nivel == 'Bronze' ? 
                            <>
                                <CardApoio nome={card.nome} logo={card.link_do_logo} link={card.link_do_site}/>
                            </> : '')}
                    </div>
                </div>
            </section>
        </div>
    </>
    )
}