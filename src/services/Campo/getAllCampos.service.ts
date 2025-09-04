import { Repository } from "typeorm"
import { Campos } from "../../entities/campos.entitie"
import { AppDataSource } from "../../data-source"
import { iReturnAllCampos, returnAllCamposSchema } from "../../schemas/campos.schemas"




export const getAllCamposService = async(status:string, offset:string, limit:string):Promise<iReturnAllCampos> => {
const campoRepository:Repository<Campos> = AppDataSource.getRepository(Campos)



const campoFind:Campos[] = await campoRepository.find({
    relations:{
        
    },where:{
       status:status
    },order:{
        id: "DESC"
    },take: parseInt(offset),
    skip: parseInt(limit)
})

    const campoSort = campoFind.sort((num1, num2) => num1.id - num2.id)
    const campo = returnAllCamposSchema.parse(campoSort)
    return campo


}