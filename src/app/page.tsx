import Image from "next/image";

// import Layout from '../components/layout';
import styles from '../styles/index.module.scss';
import A_EQUIPE from "./a_equipe/page";
import MEMBROS from "./membros/page";
import APOIO from "./apoio/page";

export default function Home() {
  return (
    <>
    <section className={`${styles.banner} ${styles.stars}`} >
      {/* We have 3 sections, one with photos on the left, one with abtract on the right, and one with sponsors on the bot */}
      <div className={styles.bannerLine}>
        <div className={styles.photos}>
          <Image src="/gallery/base.png" fill alt="Uma credencial retangular com o escrito 'Latin America Space Challenge' com a logomarca da LASC ao lado de um boné da UFABC Rocket Design, ambos sobre uma sacola ecológica bege com uma estampa da UFABC Rocket Design em azul" />
        </div>
        <div className={styles.abstract}>
          <div className={styles.logoRocket}>
            <Image src="/images/logo_rocket.png" fill alt="Logomarca UFABC Rocket Design" />
            <h1>UFABC ROCKET DESIGN</h1>
          </div>
          <div className={styles.abstractText}>
            <p>
            A UFABC Rocket Design é a primeira e maior entidade de foguetemodelismo voltada para o desenvolvimento tecnológico do setor aeroespacial brasileiro. 
            </p>
            <div className={styles.logosUFABC}>
              <Image src="/images/logo_ufabc.png" fill alt="Logomarca UFABC" />
              <Image src="/images/logo_inovaufabc.png" fill alt="Logomarca Inova UFABC" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section><A_EQUIPE/></section>
    <section><MEMBROS/></section>
    <section><APOIO/></section>
    </>
  );
}
