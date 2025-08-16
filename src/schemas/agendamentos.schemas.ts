import z from "zod";
import { returnCamposSchema } from "./campos.schemas";
import { returnUserSchema } from "./usuarios.schemas";
import { returnHorarioSchema } from "./horarios.schemas";

export const createAgendamentoSchema = z.object({
    horario: z.string(),
    dia_do_mes: z.string(),
    mes_do_ano: z.string(),
    camposId: z.number(),
    usuariosId: z.number()
})

export const returnAgendamentoSchema = z.object({
    id: z.number(),
    campos: returnCamposSchema,
    horario: z.string(),
    usuarios: returnUserSchema,
    data: z.string()
   
})

export const returnAllAgendamentosSchema = returnAgendamentoSchema.array()

export type iCreateAgendamento = z.infer<typeof createAgendamentoSchema>
export type iReturnAgendamento = z.infer<typeof returnAgendamentoSchema>
export type iReturnAllAgendamentos = z.infer<typeof returnAllAgendamentosSchema>