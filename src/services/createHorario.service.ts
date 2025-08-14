import { Repository } from "typeorm";
import { createHorarioSchema, iCreateHorario, iReturnHorario, returnHorarioSchema } from "../schemas/horarios.schemas";
import { AppDataSource } from "../data-source";
import { Horarios } from "../entities/horarios.entitie";


export const CreateHorarioService = async(horarioData: iCreateHorario):Promise<iReturnHorario> => {
    const horarioRepository:Repository<Horarios> = AppDataSource.getRepository(Horarios)

    const createHorario = horarioRepository.create(horarioData)
    await horarioRepository.save(createHorario)
    const horario = returnHorarioSchema.parse(createHorario)
    return horario
}