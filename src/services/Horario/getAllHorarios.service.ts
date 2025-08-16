import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Horarios } from "../../entities/horarios.entitie"
import { iReturnAllHorarios, returnAllHorariosSchema } from "../../schemas/horarios.schemas"

export const getAllHorarioService= async():Promise<iReturnAllHorarios> => {
    const horarioRepository:Repository<Horarios> =AppDataSource.getRepository(Horarios)

    const horarioFind:Horarios[] = await horarioRepository.find() 
    const horario = returnAllHorariosSchema.parse(horarioFind)
     return horario
}