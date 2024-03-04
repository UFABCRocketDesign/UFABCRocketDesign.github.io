import { Metadata } from 'next';

import styles from '../../styles/a_entidade.module.scss'

export const metadata: Metadata = {
    title: 'Sobre - UFABC Rocket Design',
    description: 'Where\'s the One Piece?',
}

export default function About() {
    return (<>
        <div className={styles.container}>
            <h1 className={styles.title}>Conheça nossa Equipe</h1>
            <p className={styles.description}>
            “Sanity, you say? In this accursed world, are there any sane men? Everyone… they’re all the same. Equally ignorant. They have no idea what it takes to love. They don’t understand… the meaning of life and death. They don’t even know why they fight.” – Canute <br/>
            “War always produces lots of slaves. Those defeated in battle become slaves. Like you and Arnheid. The line between warrior and slave trader is blurry. Slaves come from other places too, but I think war is the number one source. If the number of wars decreased, so would the number of slaves. But Norse men don’t think war is a bad thing. A Norse man’s worth is determined by his valor and wealth. The more enemies you kill and wealth you bring back home, the more you’re respected. So, fathers teach sons to fight, arm them, and send them off on warships. It’s what the Nords have done since ancient times without questioning it. It’s always difficult to stop doing what you think is natural.”
            </p>
        </div>

        {/* TODO: Implementar a timeline usando git-style */}
        <div className={styles.container}>
            <h2 className={styles.title}>Nossa trajetória</h2>

            
        </div>
    </>
    ) 
}