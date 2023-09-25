'use client'

import Footer from './(components)/Footer'
import Navbar from './(components)/Navbar'
import './globals.css'
import { usePathname } from 'next/navigation'

export default function RootLayout ({ children }) {
  const pathname = usePathname()

  if (pathname === '/register' | '/login') {
    return (
    <html lang='en'>
      <body className='h-screen bg-gradient-to-r from-sky-400 to-purple-600 flex justify-center items-center'>
        {children}
        </body>
    </html>
    )
  }

  return (
    <html lang="en">

      <body className='bg-gray-100'>
      <Navbar />
        {children}
      <Footer />
      </body>
    </html>
  )
}
