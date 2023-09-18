import styles from '../../styles/team.module.scss';
import { DoubleArrowRotateIcon, MicroChipIcon, EarthIcon } from '../../components/icons';
import Image from 'next/image';
import team from '../../../data/team.json';


// file ID: 141Qu2apXdlOTrQ1PjM8N3jQBlU_k0h6S
// https://drive.google.com/uc?export=download&id=141Qu2apXdlOTrQ1PjM8N3jQBlU_k0h6S

//import team from 'https://www.googleapis.com/drive/v3/files/141Qu2apXdlOTrQ1PjM8N3jQBlU_k0h6S?alt=media&key=[YOUR_API_KEY]s';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Quem somos - UFABC Rocket Design',
    description: 'Where\'s the One Piece?',
}

const teamList = team.team;

export default function Team() {
    return (<>
        
        <div className={styles.container}>
            <h1 className={styles.title}>Conheça a equipe</h1>
            <p>As such I have no regrets in meeting you, friend. Should the day ever come that we are not together, you will continue to shine like gold in my memories. </p>
        </div>

        <div className={styles.container}>
            <h2 className={styles.subTitle}>Nossos Valores</h2>
            <div className={styles.valuesList}>
                <div className={styles.valuesItem}>
                    <div className={styles.valuesIcon}><DoubleArrowRotateIcon /></div>
                    <p>Desenvolvimento de tecnologia de ponta</p>
                </div>
                <div className={styles.valuesItem}>
                    <div className={styles.valuesIcon}><MicroChipIcon /></div>
                    <p>Apoiando pesquisadores</p>
                </div>
                <div className={styles.valuesItem}>
                    <div className={styles.valuesIcon}><EarthIcon /></div>
                    <p>Projetos focados na melhoria da area aeroespacial</p>
                </div>
            </div>
        </div>

        <div className={styles.container}>
            <h2 className={styles.subTitle}>Nosso Time</h2>
            <div className={styles.team}>
                {teamList.map((person, index) => {
                    return (
                        <>
                            <div className={styles.person}
                            // onClick={() => document.getElementById('modal' + index.toString())!.style.display = 'flex'}
                            >
                                    <Image src={person.photo} alt={person.name}
                                        height={1500}
                                        width={1500}
                                        style={{
                                            width: "100%",
                                            height: "auto",
                                            aspectRatio: "1/1",
                                            borderRadius: "50%",

                                        }} />
                                <div >
                                    <h4 className={styles.personName}>{person.name}</h4>
                                    <p className={styles.personTitle}>{person.role}</p>
                                </div>
                            </div>
                            <div className={styles.modal} id={'modal' + index.toString()}
                            // onClick={(event) => {
                            //     let modal = document.getElementById('modal' + index.toString());
                            //     if (event.target == modal) {
                            //         modal.style.display = "none";
                            //     }
                            // }}
                            >
                                <div className={styles.personDetails}>
                                    <div className={styles.personPhotoModal}>
                                        <Image src={person.photo} alt={person.name}
                                            height={150}
                                            width={150} />
                                    </div>
                                    <div className={styles.personInfo}>
                                        <h4 className={styles.personName}>{person.name} - {person.role} </h4>
                                        <p className={styles.personTitle}>{person.text}</p>
                                    </div>
                                </div>
                            </div></>
                    )
                })}
            </div>
        </div>
    </>);
}