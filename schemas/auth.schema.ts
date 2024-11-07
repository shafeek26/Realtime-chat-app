import {z} from "zod"

export const formSchema = z.object({
    email: z.string().min(1, 'Email').refine((value) => {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      return emailRegex.test(value)
    }, 'Invalid email or password'),
    password : z.string().min(6, "Password").refine((value) => {
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/
        return passwordRegex.test(value)
    },'Invalid email or password')
  })