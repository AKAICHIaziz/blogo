import styles from "./contact.module.css"
import Image from "next/image"

export const metadata = {
  title: 'Contact Page',
  description: 'Contact description',
}

const ContactPage = () => {

  console.log("It works here")

  return (
    <div className={styles.container}>

      <div className={styles.imgContainer}>
        <Image className={styles.img} src={"/contact.png"} fill alt="" />
      </div>

      <div className={styles.formContainer}>
        <h1 className={styles.title}>Get in touch</h1>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Adress" />
          <input type="text" placeholder="Phone Number (optional)" />
          <textarea name="" id="" cols="30" rows="10" placeholder="Message"></textarea>
          <button>Send</button>
        </form>
      </div>

    </div>
  )
}

export default ContactPage