
import { Metadata } from 'next';

import styles from '../../styles/apoio.module.scss'
import { ParalelogramoApoio } from '@/components/paralelogramo_apoio/paralelogramo_apoio';
import { CardApoio } from '@/components/card_apoio/card_apoio';
// Beginning of page with the current project featured, followed by a list of all projects

// import  {sponsors} from '../../../data/sponsors.json'

export const metadata: Metadata = {
    title: 'Patrocinadores - UFABC Rocket Design',
    description: 'Where\'s the One Piece?',
}

export default function APOIO() {
    return (<>
        <div className={styles.container}>
            <h1 className={styles.title}>Apoio</h1>
            <section className={styles.conteudo}>
                <div className={styles.secaoapoio}>
                    <ParalelogramoApoio nivel='diamante' cor='#0abab5'/>
                    <div className={styles.cards}>
                        <CardApoio nome="Guatifer" logo={"https://i.ibb.co/MhbfBVM/Guatifer-Alta.jpg"} link={'https://www.guatiferusinagem.com.br/'}/>
                    </div>
                </div>
                <div className={styles.secaoapoio}>
                    <ParalelogramoApoio nivel='ouro' cor='#daa520'/>
                    <div className={styles.cards}>
                        <CardApoio nome="InovaUFABC" logo={"https://eventos.ufabc.edu.br/semanactiabc/images/Logos/LogoInovaUFABC2.png"} link={'https://inova.ufabc.edu.br/'}/>
                    </div>
                </div>
                <div className={styles.secaoapoio}>
                    <ParalelogramoApoio nivel='prata' cor='#979ea8'/>
                    <div className={styles.cards}>
                        <CardApoio nome="3D Fila" logo={"https://pbs.twimg.com/profile_images/610525708763426816/ES3hVM4Q_400x400.png"} link={'https://3dfila.com.br/'}/>
                        <CardApoio nome="MathWorks" logo={"https://eits.uga.edu/_resources/files/images/resized.png"} link={'https://www.mathworks.com/?s_tid=gn_logo'}/>
                        <CardApoio nome="Texiglass" logo={"https://keepflyingpoliusp.com.br/src/img/Patrocinadores/Ouro/texiglass.png"} link={'https://texiglass.com.br/'}/>
                    </div>
                </div>
                <div className={styles.secaoapoio}>
                    <ParalelogramoApoio nivel='bronze' cor='#c8682b'/>
                    <div className={styles.cards}>
                        <CardApoio nome="Redelease" logo={"https://www.redelease.ind.br/wp-content/uploads/2023/03/Logo-Redelease-PNG.png"} link={'https://www.redelease.ind.br/'}/>
                        <CardApoio nome="GPDA" logo={"images/apoiadores/bronze/gpda.jpg"} link={'https://www.facebook.com/ufabcgpda/'}/>
                    </div>
                </div>
            </section>
            <section className={styles.texto}>
                <p>A UFABC Rocket Design é movida pela paixão e dedicação de seus membros, estudantes de diversos cursos da UFABC, que investem tempo e recursos próprios para tornar nossos projetos uma realidade. No entanto, para que possamos continuar inovando e alcançando novas alturas com nossos foguetes, precisamos do seu apoio.</p>
                <h2>Por que nos apoiar?</h2>
                <ul>
                    <li><strong>Educação e Inovação:</strong> Contribua para a formação prática de futuros engenheiros e cientistas</li>
                    <li><strong>Desafios e superação:</strong> Apoie o desenvolvimento de projetos desafiadores que estimulam a criatividade e a resolução de problemas</li>
                    <li><strong>Comunidade e colaboração:</strong> Valorize uma entidade universitária que valoriza a cooperação e o compartilhamento de conhecimentos</li>
                </ul>
                <h2>Como você pode ajudar?</h2>
                <ul>
                    <li><strong>Doações:</strong> Toda doação financeira é bem vinda e será integralmente destinada ao desenvolvimento tecnológico de nossos projetos.</li>
                    <li><strong>Parcerias e patrocínios:</strong> Empresas e instituições podem se tornar parceiras e sustentar nossos sonhos oferecendo recursos, materiais ou até mesmo suporte técnico.</li>
                    <li><strong>Participar de nossas campanhas de arrecadação:</strong> Através do nosso Instagram, divulgamos nossas campanhas de arrecadação. Siga-nos e nos auxilie a ter mais alcance!!</li>
                </ul>
                <p>Faça uma doação agora e ajude a UFABC Rocket Design a voar cada vez mais alto!</p>
                <h2>Contato para Parcerias e Patrocínios</h2>
                <p>Para mais informações sobre como se tornar um parceiro ou patrocinador, entre em contato conosco:</p>
                <p>Email: foguetes@ufabc.edu.br</p>
            </section>
        </div>
    </>
    )
}