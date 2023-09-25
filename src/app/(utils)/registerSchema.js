import { z } from 'zod'

export const registerSchema = z.object({
  name: z.string({
    required_error: 'Name is required'
  })
    .min(1, {
      message: 'Name is required'
    })
    .max(30),
  lastname: z.string({
    required_error: 'Last name is required'
  })
    .min(1, {
      message: 'Lastname is required'
    })
    .max(30),
  username: z.string({
    required_error: 'Username is required'
  })
    .min(5)
    .max(20),
  email: z
    .string({
      required_error: 'Email is required'
    })
    .email({
      message: 'Email is not valid'
    }),
  password: z
    .string({
      required_error: 'Password is required'
    })
    .min(6, {
      message: 'Password must be at least 6 characters'
    })
})
