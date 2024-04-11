import styles from "./home.module.css"
import Image from "next/image"

const Home = () => {
  return <div className={styles.container}>

    <div className={styles.textContainer}>

      <h1 className={styles.title}>Creative Thoughts Agency.</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Nostrum esse, est repudiandae eaque nobis nulla qui, neque,
        officiis harum eos expedita.
      </p>
      <div className={styles.buttons}>
        <button className={styles.button}>Learn More</button>
        <button className={styles.button}>Contact</button>
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