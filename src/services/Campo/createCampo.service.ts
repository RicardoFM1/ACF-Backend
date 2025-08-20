import { Repository } from "typeorm";
import { iCreateCampo, iReturnCampo, returnCamposSchema } from "../../schemas/campos.schemas";
import { Campos } from "../../entities/campos.entitie";
import { AppDataSource } from "../../data-source";




export const CreateCamposService = async (campoData: iCreateCampo):Promise<iReturnCampo> => {
    const campoRepository:Repository<Campos> = AppDataSource.getRepository(Campos)

    const createCampo = campoRepository.create(campoData)
    await campoRepository.save(createCampo)
    const campo = returnCamposSchema.parse(createCampo)
    return campo
}