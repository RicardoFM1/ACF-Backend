import z from "zod"
import { returnHorarioSchema } from "./horarios.schemas"

export const createCamposSchema = z.object({
    nome: z.string().min(1, "Necessário preencher"),
    endereco: z.string().min(1, "Necessário preencher"),
    descricao: z.string().min(1, "Necessário preencher"),
    horariosId: z.number(),
    valor: z.number().min(1, "Necessário preencher")
})
// -- colocar imagem depois //

export const returnCamposSchema = z.object({
    id: z.number(),
    nome: z.string().min(1, "Necessário preencher"),
    endereco: z.string().min(1, "Necessário preencher"),
    descricao: z.string().min(1, "Necessário preencher"),
    valor: z.number().min(1, "Necessário preencher"),
    horarios: returnHorarioSchema
})

export type iCreateCampo = z.infer<typeof createCamposSchema>
export type iReturnCampo = z.infer<typeof returnCamposSchema>