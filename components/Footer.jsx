import Image from "next/image"
import Link from "next/Link"
import Head from 'next/head'
import styles from "../styles/Footer.module.css"
const Footer = () => {
  return (
    <>
    <Head>
        <title>Contact</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>AV0CAD0 CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" classname={styles.link}>
            <>
              <span className={styles.linkText}>WORK WITH US</span>
              <Image src="/img/link.png" alt="link" width="40" height="40" />  
            </>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          12 ADAM STREET NY <br /> USA
        </div>
        <div className={styles.cardItem}>
          CONTACT@LAMA.DEV <br /> 123 456 789
        </div>
      </div>
      <div className={styles.cardS}>
      <div className={styles.cardItem}>
          FOLLOW US: <br /> _FB _IN _BE _TW
        </div>
        <div className={styles.cardItem}>
          &copy; 2022 LAMA INTERACTIVE, <br /> ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
    </>
    
  )
}

export default Footer