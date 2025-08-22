import z, { date } from "zod";
import { returnCamposSchema } from "./campos.schemas";
import { returnUserSchema } from "./usuarios.schemas";
import { returnHorarioSchema } from "./horarios.schemas";

export const createAgendamentoSchema = z.object({
    horario: z.string().min(1, "Necessário preencher"),
    camposId: z.number().min(1, "Necessário preencher"),
    data: z.string().min(1, "Necessário preencher"),
    usuariosId: z.number().min(1, "Necessário preencher")
})

export const returnAgendamentoSchema = z.object({
    id: z.number(),
    campos: returnCamposSchema,
    horario: z.string(),
    data: z.string(),
    usuarios: returnUserSchema,
})

export const returnAllAgendamentosSchema = returnAgendamentoSchema.array()

export type iCreateAgendamento = z.infer<typeof createAgendamentoSchema>
export type iReturnAgendamento = z.infer<typeof returnAgendamentoSchema>
export type iReturnAllAgendamentos = z.infer<typeof returnAllAgendamentosSchema>