import styles from '../../styles/a_equipe.module.scss';
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
    return (
        <section className={`${styles.container} ${styles.stars}`}>
            <h1>A Equipe</h1>
            <div className={styles.conteudo1}>
                <div className={styles.divEsq}>
                    <span>XX</span>
                    <h2>Já atuaram</h2>
                </div>
                <div className={styles.containerFoto}>
                    <Image className={styles.foto} src="/gallery/foto_rg_2024_1.jpg" fill alt="" />
                </div>
                <div className={styles.divDir}>
                    <span>XX</span>
                    <h2>Membros ativos</h2>
                </div>
            </div>
            <div className={styles.conteudo2}>
                <p>In fringilla fringilla nulla. Vestibulum felis enim, convallis quis nisi quis, maximus ornare ante. Proin in tortor posuere tellus posuere scelerisque sit amet a diam. Aliquam mattis eros eu ex vulputate pretium.Nunc quam diam, tincidunt eget augue sit amet, sodales faucibus turpis. Pellentesque habitant morbi tristique. </p>
                <p>Aliquam erat volutpat. Ut a sodales libero, ac scelerisque eros. Morbi magna odio, commodo blandit neque vel, rutrum varius arcu.Donec eget eros vel purus consectetur suscipit. Praesent congue elementum dolor eu congue.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>Fusce nec ex vitae lacus tempor iaculis commodo eu metus. Donec at metus interdum, malesuada ante at, mattis nulla. Proin at urna in lorem semper eleifend. In finibus condimentum fringilla. Maecenas ultrices, augue et maximus suscipit, arcu ipsum tincidunt tortor, ac tempus urna est et est. </p>
            </div>
        </section>
    );
}