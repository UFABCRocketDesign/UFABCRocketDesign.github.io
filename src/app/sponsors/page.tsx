
import { Metadata } from 'next';

import styles from '../../styles/sponsors.module.scss'
// Beginning of page with the current project featured, followed by a list of all projects

// import  {sponsors} from '../../../data/sponsors.json'

export const metadata: Metadata = {
    title: 'Patrocinadores - UFABC Rocket Design',
    description: 'Where\'s the One Piece?',
}

export default function Sponsors() {
    return (<>
        <div className={styles.container}>
            <h1 className={styles.title}>Todo agradecimento a nossos apoiadores</h1>
        </div>

        {/* TODO: Implementar como será mostrado os patrocinadores */}
        <div className={styles.container}>

            {/* {sponsors.map((sponsor, index) => {
                return (<>
                {/* <div class="col-lg-3 col-md-6 col-sm-6 single-logo">
                    <a href="https://www.gerdau.com.br/" target="_blank"><img class="img-fluid" src="img/logo/gerdau.png" alt="GERDAU" width="200px"></a>
                </div>
                </>);
            })} */}
            
            
        </div>
    </>
    )
}