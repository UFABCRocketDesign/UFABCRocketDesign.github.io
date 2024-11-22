import { Metadata } from 'next';
import Image from "next/image";
import styles from '../../styles/a_equipe.module.scss'

export const metadata: Metadata = {
    title: 'Sobre - UFABC Rocket Design',
    description: 'Where\'s the One Piece?',
}

export default function A_EQUIPE() {
    return (
    <>
        <section className={`${styles.container} ${styles.stars}`}>
            <h1>A equipe</h1>
            <div className={`${styles.subcontainer}`}>
                <div className={styles.historia}>
                    <h2>História</h2>
                    <p>Fundada em 20 de janeiro de 2010, a UFABC Rocket Design é a primeira e maior equipe de foguetemodelismo do Brasil. Com mais de 20 projetos e diversos prêmios em competições internacionais, destacamo-nos pelo impacto gerado na sociedade, tanto pelas iniciativas de extensão quanto pelas mais de 100 pesquisas publicadas.</p>
                    <h2>Valores e Objetivos</h2>
                    <p>Somos entusiastas do setor aeroespacial, que trabalhamos para desenvolver o cenário brasileiro através do ensino, pesquisa, desenvolvimento, produção e lançamento de foguetes</p>
                </div>
                <div className={styles.divisao}>
                    <Image className={styles.foguete} src="/images/foguete.png" fill alt="Logomarca UFABC Rocket Design" />
                    <Image className={styles.foguete_horizontal} src="/images/foguete_horizontal.png" fill alt="Logomarca UFABC Rocket Design" />
                </div>
                <div className={styles.mvo}>
                    
                    <h2>Organização</h2>
                    <p>Somos uma equipe multidisciplinar, com alunos de mais de 15 cursos divididos em cinco áreas: Gestão, Missão, Pesquisa, Extensão e Marketing. Unindo diferentes formações, buscamos excelência por meio da colaboração e troca de conhecimentos, o que enriquece nossos projetos e permite soluções inovadoras para alcançar voos cada vez mais altos.</p>
                </div>
            </div>
        </section>
    </>
    ) 
}