import { Repository } from "typeorm"
import { Campos } from "../../entities/campos.entitie"
import { AppDataSource } from "../../data-source"
import { iReturnCampo, returnCamposSchema } from "../../schemas/campos.schemas"
import { AppError } from "../../errors"

export const GetCamposByidService = async(camposId:string):Promise<iReturnCampo> => {
    const camposRepository:Repository<Campos> = AppDataSource.getRepository(Campos)

    const campoFind:Campos|null = await camposRepository.findOne({
        where:{
            id: parseInt(camposId)
        }
    })
    if(!campoFind){
        throw new AppError("Campo não encontrado!")
    }
    const campo = returnCamposSchema.parse(campoFind)
    return campo
}