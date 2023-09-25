'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'

function Navbar () {
  const router = useRouter()

  const handleClick = () => {
    router.push('/register')
  }
  return (
        <nav className="h-12 sticky top-0 bg-sky-600 flex font-semibold justify-between items-center p-2">
            <h1 className="textl,-3xl text-white">Casual Chat</h1>
            <ul className="flex text-lg text-gray-100 justify-around gap-6 items-center">
              <li>
                <Link href="/">Chats</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <button onClick={handleClick} className="bg-sky-700 p-2 self-center  w-fit rounded hover:bg-sky-800 duration-200">Registrate gratis</button>
              </li>
            </ul>
        </nav>
  )
}

export default Navbar
