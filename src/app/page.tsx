import Image from "next/image";

// import Layout from '../components/layout';
import styles from '../styles/index.module.scss';
import A_EQUIPE from "./a_equipe/page";
import MEMBROS from "./membros/page";
import APOIO from "./apoio/page";

export default function Home() {
  return (
    <>
    <section className={`${styles.banner} ${styles.stars} ${styles.container}`} >
      {/* We have 3 sections, one with photos on the left, one with abtract on the right, and one with sponsors on the bot */}
      <div className={styles.bannerLine}>
        <div className={styles.photos}>
          <Image src="/gallery/base.jpg" fill alt="Uma credencial retangular com o escrito 'Latin America Space Challenge' com a logomarca da LASC ao lado de um boné da UFABC Rocket Design, ambos sobre uma sacola ecológica bege com uma estampa da UFABC Rocket Design em azul" />
        </div>
        <div className={styles.abstract}>
          <div className={styles.logoRocket}>
            <Image src="/images/logo_rocket.png" fill alt="Logomarca UFABC Rocket Design" />
            <h1>UFABC ROCKET DESIGN</h1>
          </div>
          <div className={styles.abstractText}>
            <p>
            Pioneiros e líderes no foguetemodelismo brasileiro. Transformamos sonhos em lançamentos, impulsionando o setor aeroespacial rumo ao futuro! 
            </p>
            <div className={styles.logosUFABC}>
              <Image src="/images/logo_ufabc.png" fill alt="Logomarca UFABC" />
              <Image src="/images/logo_inovaufabc.png" fill alt="Logomarca Inova UFABC" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="A_EQUIPE"><A_EQUIPE/></section>
    <section id="MEMBROS"><MEMBROS/></section>
    <section id="APOIO"><APOIO/></section>
    </>
  );
}
