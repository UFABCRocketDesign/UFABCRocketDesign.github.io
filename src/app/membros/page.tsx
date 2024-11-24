import styles from '../../styles/membros.module.scss';
import Image from 'next/image';


// file ID: 141Qu2apXdlOTrQ1PjM8N3jQBlU_k0h6S
// https://drive.google.com/uc?export=download&id=141Qu2apXdlOTrQ1PjM8N3jQBlU_k0h6S

//import team from 'https://www.googleapis.com/drive/v3/files/141Qu2apXdlOTrQ1PjM8N3jQBlU_k0h6S?alt=media&key=[YOUR_API_KEY]s';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'A Equipe - UFABC Rocket Design',
    description: '',
}


export default function MEMBROS() {
    return (
    <>
        <section className={`${styles.container} ${styles.stars}`}>
            <h1>Membros</h1>
            <div className={styles.conteudo1}>
                <div className={styles.containerFoto}>
                    <Image className={styles.foto} src="/gallery/foto_rg_2024_1.jpg" fill alt="" />
                </div>
                <div className={styles.divDir}>
                    <div>
                        <span>110</span>
                        <h2>Membros ativos</h2>
                    </div>
                    <div>
                        <span>43</span>
                        <h2>Consultores</h2>
                    </div>
                    <div>
                        <span>464</span>
                        <h2>Já atuaram</h2>
                    </div>
                </div>
            </div>
            {/*<div className={styles.conteudo2}>
                <p>Formamos pessoas que sabem lidar com os desafios de diversas áreas e estejam preparadas para trabalhar na indústria, sendo pioneiros no Brasil no ramo de foguetemodelismo. </p>
            </div>*/}
        </section>
    </>
        
    );
}