import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/navbar/Navbar'
import Footer from '@/components/footer/Footer'

import { Analytics } from "@vercel/analytics/react"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    default: "Blog216",
    template: "%s | Blog216"
  },
  description: 'Blog app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/blogger-logo.png" ></link>
      <body className={inter.className}>
        <div className='container'>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </div>
      </body>
    </html>
  )
}