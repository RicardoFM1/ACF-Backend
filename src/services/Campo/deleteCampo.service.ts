import { Repository } from "typeorm"
import { Campos } from "../../entities/campos.entitie"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"

export const DeleteCampoService = async(campoId:string):Promise<void> => {
    const campoRepository:Repository<Campos> = AppDataSource.getRepository(Campos)

    const campoFind:Campos|null = await campoRepository.findOne({
        where:{
            id: parseInt(campoId)
        }
    })
    if(!campoFind){
        throw new AppError("Campo não encontrado!")
    }
    await campoRepository.remove(campoFind)
}