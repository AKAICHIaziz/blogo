
import UserPostForm from '@/components/userPostForm/userPostForm'
import { auth } from '@/lib/auth'
import React from 'react'

const page = async() => {

    const session = await auth()

  return (
    <div>
        <UserPostForm userId={session?.user.id}/>
    </div>
  )
}

export default page