import styles from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}><Image src='/blogger-logo.png' width={20} height={20}/></div>
      <div className={styles.text}>&copy; All right reserved PandaProd 2024-2025.</div>
    </div>
  )
}

export default Footer