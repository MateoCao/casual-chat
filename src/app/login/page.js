'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import login from '../api/_actions'
import { loginSchema } from '../(utils)/loginSchema'
import InputField from '../(components)/InputField'
import formFieldsData from '../(data)/loginForm.json'
import Link from 'next/link'

function Login () {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: zodResolver(loginSchema) })

  const userLogin = async (data) => {
    const result = await login(data)
    if (!result) {
      console.log('Something went wrong')
      return
    }
    if (result.error) {
      console.log(result.error)
      return
    }
    reset()
  }

  return (
    <div className='bg-white rounded shadow-xl flex flex-col gap-8 p-4 w-96'>
        <h3 className='text-2xl font-semibold'>Inicia sesión</h3>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(userLogin)}>
            {formFieldsData.map(field => (
                <InputField
                key={field.name}
                label={field.label}
                id={field.id}
                type={field.type}
                register={register}
                name={field.name}
                autoComplete={field.autoComplete}
                errors={errors}
              />
            ))}

            <input className='bg-sky-500 hover:bg-sky-600 rounded text-white font-semibold text-lg p-2 mt-2 cursor-pointer duration-200' type='submit' value="Ingresar" />
        </form>
        <div>
            <p>¿No tienes una cuenta? <Link href="/register" className='text-sky-700'>¡Registrate!</Link></p>
            <Link href="/" className='text-sky-700'>Volver al inicio</Link>
        </div>
    </div>
  )
}

export default Login
