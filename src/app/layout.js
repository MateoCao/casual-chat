import Footer from './(components)/Footer'
import Navbar from './(components)/Navbar'
import './globals.css'

export default function RootLayout (props) {
  return (
    <html lang="en">

      <body className='bg-gray-100'>
      <Navbar />
        {props.children}
      <Footer />
      </body>
    </html>
  )
}
