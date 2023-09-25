'use server'

import { registerSchema } from '../(utils)/registerSchema'

export async function addEntry (data) {
  const result = registerSchema.safeParse(data)

  if (result.success) {
    return { success: true, data: result.data }
  }

  if (result.error) {
    return { success: false, error: result.error }
  }
}
