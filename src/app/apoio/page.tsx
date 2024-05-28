
import { Metadata } from 'next';

import styles from '../../styles/apoio.module.scss'
import { ParalelogramoApoio } from '@/components/paralelogramo_apoio/paralelogramo_apoio';
import { CardApoio } from '@/components/card_apoio/card_apoio';
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
                <div className={styles.secaoapoio}>
                    <ParalelogramoApoio nivel='diamante' cor='#0abab5'/>
                    <div className={styles.cards}>
                        <CardApoio nome="Guatifer" logo={"images/apoiadores/diamante/guatifer.png"} link={'https://www.guatiferusinagem.com.br/'}/>
                    </div>
                </div>
                <div className={styles.secaoapoio}>
                    <ParalelogramoApoio nivel='ouro' cor='#daa520'/>
                    <div className={styles.cards}>
                        <CardApoio nome="InovaUFABC" logo={"images/apoiadores/ouro/InovaUFABC.png"} link={'https://inova.ufabc.edu.br/'}/>
                    </div>
                </div>
                <div className={styles.secaoapoio}>
                    <ParalelogramoApoio nivel='prata' cor='#979ea8'/>
                    <div className={styles.cards}>
                        <CardApoio nome="3D Fila" logo={"images/apoiadores/prata/3dfila.png"} link={'https://3dfila.com.br/'}/>
                        <CardApoio nome="MathWorks" logo={"images/apoiadores/prata/MathWorks.png"} link={'https://www.mathworks.com/?s_tid=gn_logo'}/>
                        <CardApoio nome="Texiglass" logo={"images/apoiadores/prata/texiglass.png"} link={'https://texiglass.com.br/'}/>
                    </div>
                </div>
                <div className={styles.secaoapoio}>
                    <ParalelogramoApoio nivel='bronze' cor='#c8682b'/>
                    <div className={styles.cards}>
                        <CardApoio nome="Redelease" logo={"images/apoiadores/bronze/redelease.png"} link={'https://www.redelease.ind.br/'}/>
                        <CardApoio nome="GPDA" logo={"images/apoiadores/bronze/gpda.jpg"} link={'https://www.facebook.com/ufabcgpda/'}/>
                    </div>
                </div>
            </section>
        </div>
    </>
    )
}