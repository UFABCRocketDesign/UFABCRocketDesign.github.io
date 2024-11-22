import styles from './card_apoio.module.scss'
import Image from "next/image";
interface CardApoioProps{
    nome: string
    logo: string
    link: string
}

export function CardApoio({nome, logo, link}:CardApoioProps){
    return (
        <a className={styles.container} href={link} target='_blank'>
            <div className={styles.centralizarImagem}>
                <Image fill src={logo} alt={`logomarca da empresa ${nome}`} className={styles.logo}/>
            </div>
            {/*<h3 className={styles.nome}>{nome}</h3>*/}
        </a>
    )
}