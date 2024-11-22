
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
                <p>A UFABC Rocket Design é movida pela paixão e dedicação, nossos membros investem tempo e recursos próprios para tornar nossos sonhos uma realidade. No entanto, para que possamos continuar inovando e alcançando novas alturas, para que possamos continuar inovando e alcançando novas alturas, precisamos de apoio.</p>
                <h3>Por que nos apoiar?</h3>
                <ul>
                    <li><strong>Inovação e Excelência:</strong> Associe sua marca a um time inovador, que busca soluções tecnológicas avançadas e mantém elevados padrões de qualidade.</li>
                    <li><strong>Visibilidade Nacional e Internacional:</strong> Promovemos e participamos de eventos científicos de destaque, além de disputar as maiores competições do mundo, proporcionando ampla visibilidade para a marca dos nossos patrocinadores.</li>
                    <li><strong>Contribuição para o Futuro Tecnológico do Brasil:</strong> Apoie a educação, a inovação e a capacitação de talentos brasileiros.</li>
                    <li><strong>Ações Publicitárias:</strong> Realizamos ações de marketing personalizadas, alinhadas às necessidades da empresa, fortalecendo sua marca de forma estratégica.</li>
                </ul>
                <h3>Como você pode ajudar?</h3>
                <p>Junte-se a nós e faça parte dessa jornada de inovação e transformação no setor aeroespacial brasileiro! Sua contribuição, seja pessoal ou empresarial, pode ocorrer das seguintes formas:</p>
                <ul>
                    <li><strong>Doações:</strong>  Todo valor é bem vindo e será integralmente destinado ao desenvolvimento de nossos projetos.</li>
                    <li><strong>Participar de nossas campanhas de arrecadação:</strong> Através do nosso Instagram, divulgamos nossas rifas, venda de produtos e demais campanhas.</li>
                    <li><strong>Parcerias e patrocínios:</strong> Empresas e instituições podem se tornar parceiras e ter acesso ao nossos benefícios nos apoiando das seguintes maneiras:
                    <ul>
                        <li><strong>Apoio financeiro</strong></li>
                        <li><strong>Fornecimento de materiais</strong></li>
                        <li><strong>Prestação de serviços</strong></li>
                        <li><strong>Capacitação dos membros</strong></li>
                    </ul>
                    </li>
                </ul>
                <p>Acesse nosso portfólio comercial e descubra em detalhes nossos projetos, conquistas e o impacto que estamos gerando. Entre em contato conosco e contribua para o sucesso dessa missão!</p>
                <h3>Contato para Parcerias e Patrocínios</h3>
                <p>Para mais informações sobre como se tornar um parceiro ou patrocinador, entre em contato conosco:</p>
                <p>Email: foguetes@ufabc.edu.br</p>
            </section>
        </div>
    </>
    )
}