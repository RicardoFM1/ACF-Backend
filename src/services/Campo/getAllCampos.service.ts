import { Repository } from "typeorm"
import app from "../../app"
import { Campos } from "../../entities/campos.entitie"
import { AppDataSource } from "../../data-source"
import { iReturnAllCampos, returnAllCamposSchema } from "../../schemas/campos.schemas"


export const getAllCamposService = async():Promise<iReturnAllCampos> => {
const campoRepository:Repository<Campos> = AppDataSource.getRepository(Campos)

const campoFind = await campoRepository.find({
    relations:{
        horarios:true
    }
})
const campo = returnAllCamposSchema.parse(campoFind)
return campo


}