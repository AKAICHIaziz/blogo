import styles from "./home.module.css"
import Image from "next/image"
import Link from 'next/link'

const Home = () => {
  return <div className={styles.container}>

    <div className={styles.textContainer}>

      <h1 className={styles.title}>Exploring Ideas, Inspiring Minds.</h1>
      <p className={styles.desc}>
      Welcome to Blog 216, a tunisian blog app where ideas come alive and minds are inspired.
       Join our community and explore.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}><Link href="/about">Learn More</Link></button>
        <button className={styles.button}><Link href="/contact">Contact</Link></button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="" fill className={styles.brandImg} />
      </div>

    </div>

    <div className={styles.imgContainer}>
      <Image src="/ng.png" alt="" className={styles.heroImg} fill />
    </div>
  </div>;
};

export default Home;