import styles from './paralelogramo_apoio.module.scss'

interface ParalelogramoApoioProps{
    nivel: string
    cor: string
}

export function ParalelogramoApoio({nivel, cor}:ParalelogramoApoioProps){
    return (
        <div className={styles.container}>
            <div className={styles.paralelogramo} style={{backgroundColor: cor}}></div>
            <h2 className={styles.texto}>{nivel}</h2>
        </div>
    )
}