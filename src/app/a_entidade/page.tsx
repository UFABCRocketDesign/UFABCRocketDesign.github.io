import { Metadata } from 'next';
import Image from "next/image";
import styles from '../../styles/a_entidade.module.scss'

export const metadata: Metadata = {
    title: 'Sobre - UFABC Rocket Design',
    description: 'Where\'s the One Piece?',
}

export default function About() {
    return (
    <>
        <section className={`${styles.container} ${styles.stars}`}>
            <div className={styles.historia}>
                <h1>A entidade</h1>
                <h2>História</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nisi vel dolor laoreet rhoncus quis in massa. Nunc fermentum quam commodo elementum posuere. Nam eu varius magna. Aliquam pulvinar finibus semper. Integer a est lorem. Proin non aliquet eros. Sed tempor imperdiet nulla, nec scelerisque purus gravida nec.</p>
                <p>Phasellus tempus, sapien sit amet pulvinar lacinia, orci est scelerisque lacus, a aliquet arcu ipsum non nisi. Praesent pharetra id lacus sed maximus. Nulla vehicula diam quis egestas vestibulum. Vivamus in vestibulum sem. Interdum et malesuada fames ac ante ipsum primis in faucibus. Proin eget scelerisque enim, et venenatis arcu. Aliquam erat volutpat. </p>
            </div>
            <div className={styles.divisao}>
                <Image className={styles.foguete} src="/images/foguete.png" fill alt="Logomarca UFABC Rocket Design" />
                <Image className={styles.foguete_horizontal} src="/images/foguete_horizontal.png" fill alt="Logomarca UFABC Rocket Design" />
            </div>
            <div className={styles.mvo}>
                <h2>Missão e Valores</h2>
                <p>Sed a ultricies turpis, vitae vehicula nibh. Etiam sollicitudin justo vel nunc aliquet ultrices. Suspendisse laoreet eu enim eu venenatis. Donec porttitor consequat lectus. </p>
                <h2>Organização</h2>
                <p>Nulla convallis diam ex, quis viverra ipsum laoreet at. Proin vitae ex sit amet justo dapibus sodales ac eu nisl. Cras non massa eros.</p>
            </div>
        </section>
    </>
    ) 
}