
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

import styles from '../../styles/projects.module.scss'
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

        {/* Featured */}
        <div className={styles.container}>

            {unfinisheds.map((rocket, index) => {
                return (
                    <div className={styles.projectFeatured} key={index}>
                        <Image src={rocket.image} alt={rocket.name} width={500} height={500}
                            style={{
                                width: "auto",
                                height: "100%",
                                borderRadius: "1rem",
                                margin: "auto",
                            }} />
                        <div className={styles.projectDetails}>
                            <h2 className={styles.projectTitle}>{rocket.name}</h2>
                            <p className={styles.projectDescription}>{rocket.description}</p>
                        </div>
                    </div>
                )
            }
            )}
            <div>
                <h2 className={styles.subTitle}>Projetos Finalizados</h2>
                <div className={styles.projects}>
                    {finisheds.map((rocket, index) => {
                        return (
                            <div className={styles.project} key={index}>
                                <Image src={rocket.image} alt={rocket.name} width={500} height={500}
                                    style={{
                                        width: "auto",
                                        height: "80%",
                                        borderRadius: "1rem",
                                        margin: "auto",
                                        aspectRatio: "4/3",
                                    }} />
                                <div className={styles.projectDetails}>
                                    <h2 className={styles.projectTitle}>{rocket.name}</h2>
                                    <p className={styles.projectDescription}>{rocket.description}</p>
                                </div>
                            </div>

                        )
                    })}
                </div>
            </div>
        </div>
    </>
    )
}