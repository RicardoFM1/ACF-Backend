import e from "express";
import z from "zod";
import { returnCamposSchema } from "./campos.schemas";

export const createHorarioSchema = z.object({
    dia_da_semana: z.string(),
    horario_inicial: z.string(),
    horario_final: z.string(),
    camposId: z.number()
})

export const returnHorarioSchema = createHorarioSchema.extend({
    id: z.number(),
    campos: returnCamposSchema
})

export const returnAllHorariosSchema = returnHorarioSchema.array()

export type iCreateHorario = z.infer<typeof createHorarioSchema>
export type iReturnHorario = z.infer<typeof returnHorarioSchema>
export type iReturnAllHorarios = z.infer<typeof returnAllHorariosSchema>