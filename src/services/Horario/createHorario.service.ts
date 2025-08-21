import { Repository } from "typeorm";
import { createHorarioSchema, iCreateHorario, iReturnHorario, returnHorarioSchema } from "../../schemas/horarios.schemas";
import { AppDataSource } from "../../data-source";
import { Horarios } from "../../entities/horarios.entitie"
import { Campos } from "../../entities/campos.entitie";
import { AppError } from "../../errors";


export const CreateHorarioService = async(horarioData: iCreateHorario):Promise<iReturnHorario> => {
    const horarioRepository:Repository<Horarios> = AppDataSource.getRepository(Horarios)
    const campoRepository:Repository<Campos> = AppDataSource.getRepository(Campos)

    const campoFind:Campos|null = await campoRepository.findOne({
        where:{
            id: horarioData.camposId
        }
    })
    if(!campoFind){
        throw new AppError("Não foi possível encontrar o campo")
    }
    const createHorario:Horarios = horarioRepository.create({
    ...horarioData,
    campos: campoFind
})  
    await horarioRepository.save(createHorario)
    const horario = returnHorarioSchema.parse(createHorario)
    return horario
}