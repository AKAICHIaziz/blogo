"use client"

import Link from 'next/link'

const error = () => {
  return (
    <div>
      <h1>Internal server error</h1>
      <Link src='/'>Go back</Link>
    </div>
  )
}

export default error