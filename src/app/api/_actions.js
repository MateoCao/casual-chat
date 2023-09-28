'use server'

import { loginSchema } from '../(utils)/loginSchema'
import { registerSchema } from '../(utils)/registerSchema'

export async function submitUser (data) {
  const result = registerSchema.safeParse(data)

  if (result.success) {
    return { success: true, data: result.data }
  }

  if (result.error) {
    return { success: false, error: result.error }
  }
}

export async function login (data) {
  const result = loginSchema.safeParse(data)

  if (result.success) {
    return { success: true, data: result.data }
  }

  if (result.error) {
    return { success: false, error: result.error }
  }
}
