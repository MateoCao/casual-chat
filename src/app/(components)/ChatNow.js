'use client'

import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

function ChatNow () {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm()

  const router = useRouter()

  const submitUsername = (data) => {
    console.log(data)
    router.push('/register')
    reset()
  }

  return (
        <section className="bg-gray-50 h-[calc(100vh/2)] w-full flex items-center justify-center">
            <div className="flex justify-around items-center w-2/3">
                <div>
                    <h3 className="text-4xl font-semibold text-sky-500">¡Pruébalo ahora!</h3>
                </div>
                <div className="bg-white shadow-lg rounded w-96 p-6 h-52  flex items-center justify-center">
                    <form onSubmit={handleSubmit(submitUsername)} className="flex flex-col gap-4 w-full">
                        <label className="text-xl font-semibold" htmlFor="username">Ingresa un nombre de usuario</label>
                        <input
                            className="border-2 rounded p-2 focus:border-sky-500 text-xl"
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Juanceto01"
                            {...register('username', {
                              required: 'Ingresa un nombre de usuario',
                              maxLength: 20,
                              minLength: 2
                            })}
                        />
                        <span className='text-sm text-red-600 h-2'>{errors.username?.message}</span>
                        <button className="bg-sky-500 hover:bg-sky-600 rounded text-white font-semibold text-lg p-2 mt-2 duration-200" type="submit">Chatear</button>
                    </form>
                </div>
            </div>
        </section>
  )
}

export default ChatNow
