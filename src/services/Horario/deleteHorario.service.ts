import { Repository } from "typeorm"
import { Horarios } from "../../entities/horarios.entitie"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"

export const DeleteHorarioService = async(horarioId:string):Promise<void> => {
    const horarioRepository:Repository<Horarios> = AppDataSource.getRepository(Horarios)
    
    const horarioFind:Horarios|null = await horarioRepository.findOne({
        where: {
            id: parseInt(horarioId)
        }
    })
    if(!horarioFind){
        throw new AppError("Horario não encontrado!")
    }
    await horarioRepository.remove(horarioFind)

    
}