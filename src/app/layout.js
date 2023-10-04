import './globals.css'
import { GoogleProvider } from './(providers)/GoogleProvider'

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className='bg-gray-100'>
      <GoogleProvider>
          {children}
      </GoogleProvider>
      </body>
    </html>
  )
}
