import { Repository } from "typeorm"
import { Horarios } from "../../entities/horarios.entitie"
import { AppDataSource } from "../../data-source"
import { iCreateHorario, iReturnHorario, returnHorarioSchema } from "../../schemas/horarios.schemas"
import { AppError } from "../../errors"

export const UpdateHorarioService = async(horarioId:string, horarioData:iCreateHorario):Promise<iReturnHorario> => {
    const horarioRepository:Repository<Horarios> = AppDataSource.getRepository(Horarios)

    const horarioFind:Horarios|null = await horarioRepository.findOne({
        where:{
            id: parseInt(horarioId)
        },
        relations:{
            campos: true
        }

    })
    if(!horarioFind){
        throw new AppError("Horario não encontrado!")
    }
    const updateHorario = horarioRepository.create({
        ...horarioFind,
        ...horarioData
    })
    await horarioRepository.save(updateHorario)
    const horario = returnHorarioSchema.parse(updateHorario)
    return horario
}