
import { Metadata } from 'next';
import data from '../../../data/joinus.json';

const links = data.links;
const calendar = data.calendar;

import styles from '../../styles/joinus.module.scss'
// Beginning of page with the current project featured, followed by a list of all projects

export const metadata: Metadata = {
    title: 'Processo Seletivo - UFABC Rocket Design',
    description: 'Where\'s the One Piece?',
}

export default function JoinUs() {
    return (<div className={styles.container}>
        <div className={styles.container}>
            <h1 className={styles.title}>Processo Seletivo 2023.2</h1>
            <p className={styles.textCenter}>Deseja fazer parte da UFABC Rocket Design? Entenda como funciona nosso processo seletivo.</p>
        </div>

        <div className={styles.container}>
            {/* About */}
            <div className={styles.container}>
                <h2 className={styles.subtitle}>Sobre o processo seletivo</h2>

                <p> A equipe UFABC Rocket Design declara aberta a busca por nakamas</p>
                <p> Poderão se inscrever alunos da UFABC que atendem ao seguintes criterios</p>
                <ul>
                    <li> Ser aluno da UFABC</li>
                    <li> Gostar de One Piece</li>
                    <li> Ser meio biluteteia das ideias</li>
                </ul>
            </div>


            {/* links importantes */}

            <div className={styles.container}>
                {links.map((item, index) => (
                    <div key={index} className="col-sm-6 mb-4">
                        <div className="feature-card text-center bg-light">
                            <a target="_blank" href={item.link} rel="noreferrer"><i className={item.icon + " mb-3"}></i>
                                <h4 className="mb-2">{item.name}</h4>
                            </a>
                            <p>{item.content}</p>
                            <a href={item.link} target="_blank" rel="noreferrer"><button className="btn btn-primary"> Clique aqui </button></a>
                        </div>
                    </div>
                ))}
            </div>

            {/* Calendar */}

            <div className={styles.container}>
                <h2 className={styles.subtitle}>Calendário</h2>
                <table>
                    <thead>
                        <tr>
                            <th scope="col" data-field="data">Data</th>
                            <th scope="col" data-field="descricao">Descrição</th>
                        </tr>
                    </thead>
                    <tbody>
                        {calendar.map((item, index) => (
                            <tr key={index.toString()}>
                                <td scope="row">{item.date}</td>
                                <td scope="row">{item.description}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    </div>)
}