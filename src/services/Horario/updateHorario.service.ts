import { Repository } from "typeorm"
import { Horarios } from "../../entities/horarios.entitie"
import { AppDataSource } from "../../data-source"
import { iCreateHorario, returnHorarioSchema } from "../../schemas/horarios.schemas"

export const UpdateHorarioService = async(horarioId:string, horarioData:iCreateHorario) => {
    const horarioRepository:Repository<Horarios> = AppDataSource.getRepository(Horarios)

    const horarioFind:Horarios|null = await horarioRepository.findOne({
        where:{
            id: parseInt(horarioId)
        }

    })
    const updateHorario = horarioRepository.create({
        ...horarioFind,
        ...horarioData
    })
    await horarioRepository.save(updateHorario)
    const horario = returnHorarioSchema.parse(updateHorario)
    return horario
}