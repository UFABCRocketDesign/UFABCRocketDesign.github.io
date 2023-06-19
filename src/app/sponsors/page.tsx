
import { Metadata } from 'next';


import styles from '../../styles/sponsors.module.scss'
// Beginning of page with the current project featured, followed by a list of all projects

export const metadata: Metadata = {
    title: 'Patrocinadores - UFABC Rocket Design',
    description: 'Where\'s the One Piece?',
}

export default function Sponsors() {
    return (<>
        <div className={styles.container}>
            <h1 className={styles.title}>Todo agradecimento a nossos apoiadores</h1>
        </div>

        {/* TODO: Implementar como será mostrado os patrocinadores */}
        <div className={styles.container}>

            
        </div>
    </>
    )
}