'use client'
import Image from "next/image";

// import Layout from '../components/layout';
import styles from '../styles/index.module.scss';
import textos_api from "@/drive/getTextos";
import { useEffect } from "react";
import parseCSV from "@/drive/parseCSV";

export default function Home() {
  
  useEffect(()=>{
    textos_api.get('').then((res) => console.log(parseCSV(res.data)))
  },[])

  return (
    <div className={`${styles.banner} ${styles.stars}`} >
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed fringilla vestibulum eros sed euismod. Etiam ac tortor consequat justo pharetra facilisis.  
            </p>
            <p>
            Nam gravida nisi nec posuere placerat. Vivamus lacinia, nibh ut lobortis auctor, dolor ligula porttitor risus, at accumsan magna eros a nulla. Integer ac tincidunt eros.
            </p>
            <div className={styles.logosUFABC}>
              <Image src="/images/logo_ufabc.png" fill alt="Logomarca UFABC" />
              <Image src="/images/logo_inovaufabc.png" fill alt="Logomarca Inova UFABC" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
