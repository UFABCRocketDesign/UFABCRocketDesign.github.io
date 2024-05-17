
import { Metadata } from 'next';
import Image from 'next/image'
import projects from '../../../data/projects.json'

const rockets = projects.rockets;

let finisheds: Array<any> = [];
let unfinisheds: Array<any> = [];

rockets.forEach((rocket) => {
    if (rocket.finished) {
        finisheds.push(rocket);
    } else {
        unfinisheds.push(rocket);
    }
})

import styles from '../../styles/missoes.module.scss'
// Beginning of page with the current project featured, followed by a list of all projects

export const metadata: Metadata = {
    title: 'Projetos - UFABC Rocket Design',
    description: 'Where\'s the One Piece?',
}

export default function Projects() {
    return (<>
        <div className={styles.container}>
            <h1 className={styles.title}>Conheça nossos Foguetes</h1>
        </div>
    </>
    )
}