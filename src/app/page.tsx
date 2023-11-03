import Image from "next/image";

// import Layout from '../components/layout';
import styles from '../styles/index.module.scss';

export default function Home() {
  return (
    <>
      <div className={styles.banner} >
        {/* We have 3 sections, one with photos on the left, one with abtract on the right, and one with sponsors on the bot */}
        <div className={styles.bannerLine}>
          <div className={styles.photos}>
            <div className={styles.bigPhotoContainer}>
              <Image className={styles.bigPhoto} src="/images/Atlas.JPG" fill alt="" />
            </div>
            <div className={styles.smallPhotoContainer}>
              <Image className={styles.smallPhoto} src="/images/Thousand_Sunny.webp" fill alt="" />
            </div>
          </div>
          <div className={styles.abstract}>
            <h1 className={styles.title}>
              UFABC Rocket Design
            </h1>
            <p className={styles.description}>
              &quot;When robbery is done in open daylight by sanction of the law, as it is done today, then any act of honor or restitution has to be hidden underground.&quot;

              &quot;What made you think that I&apos;d accept a gift of this kind?&quot;

              &quot;It is not a gift, Mr. Rearden. It is your own money. But I have one favor to ask of you. It is a request, not a condition, because there can be no such thing as conditional property. The gold is yours, so you are free to use it as you please. But I risked my life to bring it to you tonight, so I am asking, as a favor, that you save it for the future or spend it on yourself. On nothing but your own comfort and pleasure. Do not give it away and, above all, do not put it into your business.&quot;
            </p>
            <div className={styles.abstractLogos}>
              <Image className={styles.abstractLogo} src="/images/logo_rocket.png" fill alt="" />
              <Image className={styles.abstractLogo} src="/images/logo_ufabc.png" fill alt="" />
            </div>
          </div>
        </div>
        <div className={styles.sponsors}>
          <div className={styles.sponsorContainer}>
            <Image className={styles.sponsor} src="/images/sponsors/Baratie.webp" fill alt="" />
          </div>
          <div className={styles.sponsorContainer}>
            <Image className={styles.sponsor} src="/images/sponsors/Baroque_Works_Infobox.webp" fill alt="" />
          </div>
          <div className={styles.sponsorContainer}>
            <Image className={styles.sponsor} src="/images/sponsors/Revolutionary_Army_Infobox.webp" fill alt="" />
          </div>
        </div>
      </div>

      {/* Seção de projetos */}

      <div className={styles.projects}>
        <div className={styles.title}>
          <h1>Nossos Projetos</h1>
        </div>
        <div className={styles.projectsContainer}>
          <div className={styles.projectPatch}>
            {/* Make iteractive over a json sheet */}
            <Image className={styles.projectPatchImage} src="/images/projects/missao-liberty.png" fill alt="" />
            <h5 className={styles.projectName}>Missão Liberty</h5>
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.pageButton}>Ver mais</button>
        </div>
      </div>

      {/* Seção da equipe */}

      <div className={styles.team}>
        <div className={styles.title}>
          <h1>Nossa Equipe</h1>
        </div>
        <div className={styles.teamDescription}>
          <p className={styles.description}>
            In the last moment of his life, he turned his fading &quot;flame of life&quot; into a huge fire that enveloped the world. I&apos;ve never laughed more than on that day...!! I&apos;ve never cried more than on that day... I&apos;ve never drank more either..!! He was our captain... and he was a magnificent man...!!!
          </p>
        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.pageButton}>Ver mais</button>
        </div>
      </div>

      {/* Rocket Boosters?? */}
      {/* Doe*/}

      <div className={styles.donates}>
        <div className={styles.title}>
          <h1>Doe</h1>
        </div>
        <div className={styles.donateContainer}>
          <div className={styles.donateDescription}>
            <p className={styles.description}>
              For those that live too long, the friends of days gone by and scenes from their adventures live on in their memories. As such I have no regrets in meeting you, friend. Should the day ever come that we are not together, you will continue to shine like gold in my memories.
            </p>
          </div>
          <div className={styles.donateButtonContainer}>
            <button className={styles.donateButton}>BOTONS PARA O PAYPAL AQUI</button>
          </div>
        </div>
      </div>

      {/* <div className={styles.body}>
        <div className={styles.row}>
          <h1 className={styles.title}>
            <span>Ad astra abyssosque</span>
          </h1>

        </div>

        <div className={styles.row}>
          <div className={styles.col}>
            <h3>
              <span>Desenvolvendo novas tecnologias</span>
            </h3>
            <p>
              “I swear by my life and my love of it that I will never live for the sake of another man, nor ask another man
              to live for mine.”
            </p>
          </div>
          <div className={styles.col}>
            <h3>
              <span>Conectando a universidade e o mercado</span>
            </h3>
            <p>
              “An honest man is one who knows that he can&apos;t consume more than he has produced.”
            </p>
          </div>
          <div className={styles.col}>
            <h3>
              <span>Conectando a universidade e o mercado</span>
            </h3>
            <p>
              “Look more carefully, Mr. Rearden. There are only two modes of living left to us today: to be a looter who
              robs disarmed victims or to be a victim who works for the benefit of his own despoilers. I did not choose to
              be either.”
            </p>
          </div>
        </div>

        <div className={styles.video}>
          {/* <!-- TODO: implementar um video mp3 --> */}
      {/* <iframe width="560" height="315"
            src="https://www.youtube.com/embed/c8MLKuc4Rxc?autoplay=1"
            title="YouTube video player"
            frameBorder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.row}>
          <div className={styles.col}>
            <div className={styles.imageContainer}>
              <Image
                src="/images/Sabo.jpg"
                alt=''
                width={500}
                height={500}

                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "0.5rem",
                }} />
              <div className={styles.imageContent}>
                <h5 className={styles.imageContentText}>Nosso Sistema de pesquisa e desenvolvimento.</h5>
                <button className={styles.imageContentButton}>
                  Faça o download
                </button>
              </div>
            </div>
            {/* <!-- TODO: implementar um a seção de sistema de pesquisa --> */}

      {/* </div>
          <div className={styles.highlightCol}>
            <h2 className={styles.highlightText}>
              Estamos criando tecnologias para a nova geração de exploradores
            </h2>
          </div>
        </div>
      </div> */}
    </>
  );
}
