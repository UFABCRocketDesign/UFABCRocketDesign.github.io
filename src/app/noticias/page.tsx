
import { Metadata } from 'next';


import styles from '../../styles/researchs.module.scss'
// Beginning of page with the current project featured, followed by a list of all projects

export const metadata: Metadata = {
    title: 'Pesquisas - UFABC Rocket Design',
    description: 'Where\'s the One Piece?',
}

export default function Researchs() {
    return (<>
        <div className={styles.container}>
            <h1 className={styles.title}>Conheça pesquisas desenvolvidas em nosso Nucleo</h1>
        </div>

        {/* TODO: Implementar como será mostrado as pesquisas */}
        <div className={styles.container}>

            
        </div>
    </>
    )
}