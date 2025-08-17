import {z} from "zod";
import { returnUserSchema } from "./usuarios.schemas"

export const CreateLoginSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string()
})
export const returnLoginSchema = z.object({
    usuario:returnUserSchema,
    token:z.string()
})


export type iCreateLogin = z.infer<typeof CreateLoginSchema>
export type iReturnLogin = z.infer<typeof returnLoginSchema>