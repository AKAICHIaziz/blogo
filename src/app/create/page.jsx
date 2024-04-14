
import UserPostForm from '@/components/userPostForm/userPostForm'
import { auth } from '@/lib/auth'
import React from 'react'
import styles from "./create.module.css"

const page = async() => {

    const session = await auth()

  return (
    <div className={styles.container}>
        <UserPostForm userId={session?.user.id}/>
    </div>
  )
}

export default page