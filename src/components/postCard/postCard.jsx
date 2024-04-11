import styles from "./postCard.module.css"
import Image from "next/image"
import Link from "next/link"
import { truncate } from "lodash"

const PostCard = ({ post }) => {

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        {post.img && <div className={styles.imgContainer}>
          <Link className={styles.link} href={`/blog/${post.slug}`} >
            <Image  src={post.img} alt="" fill className={styles.img} />
          </Link>

        </div>}
        <span className={styles.date}>{post.createdAt.toString().slice(0, 10)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{truncate(post.desc, { length: 120 })}</p>
        <Link className={styles.link} href={`/blog/${post.slug}`} >READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard