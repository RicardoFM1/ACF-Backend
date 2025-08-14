import { Repository } from "typeorm";
import { createCamposSchema, iCreateCampo, iReturnCampo, returnCamposSchema } from "../schemas/campos.schemas";
import { Campos } from "../entities/campos.entitie";
import { AppDataSource } from "../data-source";
import { Horarios } from "../entities/horarios.entitie";
import { AppError } from "../errors";



export const CreateCamposService = async (campoData: iCreateCampo):Promise<iReturnCampo> => {
    const campoRepository:Repository<Campos> = AppDataSource.getRepository(Campos)
    const horarioRepository:Repository<Horarios> = AppDataSource.getRepository(Horarios)
    const findHorario = await horarioRepository.findOne({
        where: {
            id: campoData.horariosId
        }
    
    })
    if(!findHorario){
        throw new AppError("Horario não encontrado!")
    }
    const createCampo = campoRepository.create({
    ...campoData,
    horarios: findHorario
})
    await campoRepository.save(createCampo)
    const campo = returnCamposSchema.parse({...createCampo })
    return campo
}