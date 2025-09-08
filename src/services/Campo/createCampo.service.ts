import { Repository } from "typeorm";
import { iCreateCampo, iReturnCampo, returnCamposSchema } from "../../schemas/campos.schemas";
import { Campos } from "../../entities/campos.entitie";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";




export const CreateCamposService = async (campoData: iCreateCampo):Promise<iReturnCampo> => {
    const campoRepository:Repository<Campos> = AppDataSource.getRepository(Campos)

    const findCampo:Campos|null = await campoRepository.findOne({
        where:{
            nome:campoData.nome
        }
        
    })
    if(findCampo){
        throw new AppError("Esse nome do campo já está em uso!", 409) 
    }

    const createCampo = campoRepository.create(campoData)
    await campoRepository.save(createCampo)
    const campo = returnCamposSchema.parse(createCampo)
    return campo
}