import styles from './card_apoio.module.scss'
import Image from "next/image";
interface CardApoioProps{
    nome: string
    logo: string
}

export function CardApoio({nome, logo}:CardApoioProps){
    return (
        <div className={styles.container}>
            <div className={styles.centralizarImagem}>
                <Image fill src={logo} alt={`logomarca da empresa ${nome}`} className={styles.logo}/>
            </div>
            <h3 className={styles.nome}>{nome}</h3>
        </div>
    )
}