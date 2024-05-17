
import { Metadata } from 'next';

import styles from '../../styles/apoio.module.scss'
import { ParalelogramoApoio } from '@/components/paralelogrmo_apoio/paralelogramo_apoio';
// Beginning of page with the current project featured, followed by a list of all projects

// import  {sponsors} from '../../../data/sponsors.json'

export const metadata: Metadata = {
    title: 'Patrocinadores - UFABC Rocket Design',
    description: 'Where\'s the One Piece?',
}

export default function Sponsors() {
    return (<>
        <div className={styles.container}>
            <h1 className={styles.title}>Quem nos impulsiona</h1>
            <section className={styles.conteudo}>
                <ParalelogramoApoio nivel='diamante' cor='#0abab5'/>
                <ParalelogramoApoio nivel='ouro' cor='#daa520'/>
                <ParalelogramoApoio nivel='prata' cor='#979ea8'/>
                <ParalelogramoApoio nivel='bronze' cor='#c8682b'/> 
            </section>
        </div>
    </>
    )
}