import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

async function Chats () {
  const session = await getServerSession(authOptions)

  if (!session) {
    redirect('/register?callbackUrl=/chats')
  }

  if (session === undefined) return <div>Cargando...</div>
  return (

        <div>
            Bienvenido {session.user.name}
        </div>
  )
}

export default Chats
