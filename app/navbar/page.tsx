import React from 'react'
import Link from 'next/link'

const navbar = () => {
  return (
    <div>
      <h1>This is Navbar page</h1>
      <Link href ="/about">About</Link> <br />
      <Link href = "/footer">Footer</Link> <br />
      <Link href = "/contact">Contact</Link>
    </div>
  )
}

export default navbar
