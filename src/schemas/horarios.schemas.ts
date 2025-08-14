import z from "zod";

export const createHorarioSchema = z.object({
    dia_da_semana: z.string(),
    horario_inicial: z.string(),
    horario_final: z.string()
})

export const returnHorarioSchema = createHorarioSchema.extend({
    id: z.number()
})

export type iCreateHorario = z.infer<typeof createHorarioSchema>
export type iReturnHorario = z.infer<typeof returnHorarioSchema>