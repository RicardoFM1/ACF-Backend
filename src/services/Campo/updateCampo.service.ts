import { Repository } from "typeorm";
import { iCreateCampo, iReturnCampo, returnCamposSchema } from "../../schemas/campos.schemas";
import { Campos } from "../../entities/campos.entitie";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

export const UpdateCampoService = async(campoId:string, campoData:Partial<iCreateCampo>):Promise<iReturnCampo> => {
    const campoRepository:Repository<Campos> = AppDataSource.getRepository(Campos)

    const campoFind:Campos|null = await campoRepository.findOne({
        where:{
            id: parseInt(campoId)
        }
    })
    if(!campoFind){
        throw new AppError("Campo não encontrado!")
    }
    const campoUpdate = campoRepository.create({
        ...campoFind,
        ...campoData
    })
    await campoRepository.save(campoUpdate)
    const campo = returnCamposSchema.parse(campoUpdate)
    return campo
}