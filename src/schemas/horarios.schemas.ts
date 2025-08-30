import e from "express";
import z from "zod";
import { returnCamposSchema } from "./campos.schemas";
import { returnAgendamentoSchema } from "./agendamentos.schemas";


export const createHorarioSchema = z.object({
    dia_da_semana: z.string().min(1, "Necessário preencher"),
    horario_inicial: z.string().min(1, "Necessário preencher"),
    horario_final: z.string().min(1, "Necessário preencher"),
    camposId: z.number().min(1, "Necessário preencher"),
    status: z.string()
})

export const returnHorarioSchema = z.object({
    id: z.number(),
    dia_da_semana: z.string(),
    horario_inicial: z.string(),
    horario_final: z.string(),
    campos: returnCamposSchema.pick({id:true}),
    agendamentos:returnAgendamentoSchema.omit({usuarios:true}).array().optional(),
    status: z.string()
})

export const returnAllHorariosSchema = returnHorarioSchema.array()
export const createHorariosSchema=createHorarioSchema.array()
export type iCreateHorario = z.infer<typeof createHorarioSchema>
export type iCreateHorarios = z.infer<typeof createHorariosSchema>
export type iReturnHorario = z.infer<typeof returnHorarioSchema>
export type iReturnAllHorarios = z.infer<typeof returnAllHorariosSchema>