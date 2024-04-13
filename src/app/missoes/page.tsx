
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

        {/* Featured */}
        <div className={styles.container}>

            {unfinisheds.map((rocket, index) => {
                return (
                    <div className={styles.projectFeatured} key={index}>

                        <Image className={styles.projectPatchImage} src={rocket.image} alt={rocket.name} fill />

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
                                <Image className={styles.projectPatchImage} src={rocket.image} alt={rocket.name} fill />
                                <div className={styles.projectDetails}>
                                    <h2 className={styles.projectTitle}>{rocket.name}</h2>
                                    <p className={styles.projectDescription}>{rocket.description}</p>
                                </div>
                            </div>

                        )
                    })}
                </div>
                {/* 
                TODO: Implementar os projetos no modelo do site antigo, http://web.archive.org/web/20180724235621/http://ufabcrocketdesign.com.br/projetos.html, com informações técnicas e fotos
                <div class="row">
					<div class="four columns borda">
						<img src="/web/20180724235621im_/http://ufabcrocketdesign.com.br/images/missao-boitata-logo.png" alt="">
						<h5 class="subtitle-center">informações técnicas</h5>
						<ul class="list-info">
							<li><b>Objetivo:</b> Experimental.</li>
							<li><b>Início:</b> Outubro de 2012.</li>
							<li><b>Término:</b> Junho de 2013.</li>
							<li><b>Apogeu Aproximado:</b> 1.000 m.</li>
						</ul>
					</div>
					<div class="eight columns">
						<h3 class="subtitle-center">Boitatá I</h3>
						<p>O Boitatá I foi o primeiro projeto de um foguete completo da UFABC Rocket Design, contando com sistemas de propulsão, aviônica, recuperação e estrutura totalmente desenvolvidos pela equipe.</p>
						<p>Para ser lançado no Centro de Estudos do Universo, em Brotas/SP, o Boitatá I teve que atender uma série de exigências técnicas, como cálculo de raio de segurança, sistemas de combate de incêndio e toda a estrutura oferecida pelo próprio CEU.</p>
						<p>Pela primeira vez, foi feita uma estrutura de fibra de carbono, graças à parceria recém firmada com a ALLTEC Materiais Compostos. Dentre as novidades do foguete, estavam um sistema de eletrônica embarcada (feito com Arduino e servomotor) e um paraquedas de 1,3 m de diâmetro ejetado por molas.</p>
						<p>Além disso, o combustível usado no motor do Boitatá I foi KNSU, replicado e testado pelo projeto Liberty. Antes do lançamento, que ocorreu em 29 de junho de 2013, foi feito um estudo fluodinâmico computacional (CFD). Por fim, o Boitatá I também foi destaque na I Semana das Engenharias da UFABC, tendo sido exposto no estande da equipe.</p>
					</div>
					</div> */}
            </div>
        </div>
    </>
    )
}