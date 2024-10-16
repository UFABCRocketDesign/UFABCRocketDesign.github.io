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
                    <p>Somos uma organização estudantil, sem fins lucrativos, sem filiação religiosa, política ou partidária, com fundação oficial em 20 de janeiro de 2010 e contamos atualmente com mais de 120 membros, divididos em 10 áreas de atuação, incluindo desenvolvimento de projetos, gestão de pessoas e dados, extensão universitária, comunicação com o meio externo, divulgação e pesquisa tecnológica.</p>
                    <p>Participando de competições desde 2013, a UFABC Rocket Design já lançou projetos em torneios nacionais, latinoamericanas e mundiais. Para além dos lançamentos, é notável a contribuição da equipe em projetos de pesquisa e extensão universitária, contando com mais de 10 professores orientadores para iniciação científica, participando e promovendo diversos eventos para agregar valor e desenvolver tanto a comunidade científica aeroespacial como a comunidade externa.</p>
                </div>
                <div className={styles.divisao}>
                    <Image className={styles.foguete} src="/images/foguete.png" fill alt="Logomarca UFABC Rocket Design" />
                    <Image className={styles.foguete_horizontal} src="/images/foguete_horizontal.png" fill alt="Logomarca UFABC Rocket Design" />
                </div>
                <div className={styles.mvo}>
                    <h2>Valores e Objetivos</h2>
                    <p>Na UFABC Rocket Design, estamos comprometidos com o progresso da ciência aeroespacial brasileira e promovemos a integração entre academia e comunidade. Valorizamos disciplina, determinação, ética e o bem-estar de nossos membros. Temos a honra de representar a UFABC e buscamos constantemente aprimorar o conhecimento acadêmico e desenvolver tecnologias inovadoras em foguetemodelismo.</p>
                    <h2>Organização</h2>
                    <p>A UFABC Rocket Design apresenta uma estruturação organizacional robusta, delineada através de um estatuto elaborado pelos próprios alunos. A equipe opera com eficácia ao integrar núcleos e departamentos que abrangem desde o design aerodinâmico até a gestão financeira.</p>
                    <p>Compõem a estrutura da equipe os núcleos de Gestão, Missão, Extensão, Pesquisa e Marketing, além das Lideranças de Projeto e a Comissão de Segurança.</p>
                </div>
            </div>
        </section>
    </>
    ) 
}