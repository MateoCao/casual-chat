'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { registerSchema } from '../(utils)/registerSchema'
import { addEntry } from '../api/_actions'
import Link from 'next/link'
import InputField from '../(components)/InputField'
import formFieldsData from '../(data)/registerForm.json'

function Register () {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({ resolver: zodResolver(registerSchema) })

  const userRegister = async (data) => {
    const result = await addEntry(data)
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
        <h3 className='text-2xl font-semibold'>Registrate aquí</h3>
        <form className="flex flex-col gap-2" onSubmit={handleSubmit(userRegister)}>
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

            <input className='bg-sky-500 hover:bg-sky-600 rounded text-white font-semibold text-lg p-2 mt-2 cursor-pointer' type='submit' value="Registrarme" />
        </form>
        <div>
            <p>¿Ya estás registrado? <Link href="/login" className='text-sky-700'>¡Inicia sesión aquí!</Link></p>
            <Link href="/" className='text-sky-700'>Volver al inicio</Link>
        </div>
    </div>
  )
}

export default Register
