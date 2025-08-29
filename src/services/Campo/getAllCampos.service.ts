import { Repository } from "typeorm"
import app from "../../app"
import { Campos } from "../../entities/campos.entitie"
import { AppDataSource } from "../../data-source"
import { iReturnAllCampos, returnAllCamposSchema } from "../../schemas/campos.schemas"



export const getAllCamposService = async(status:string):Promise<iReturnAllCampos> => {
const campoRepository:Repository<Campos> = AppDataSource.getRepository(Campos)



const campoFind:Campos[] = await campoRepository.find({
    relations:{
        
    },where:{
       descricao:status
    },order:{
        id: "DESC"
    }
})

    const campoSort = campoFind.sort((num1, num2) => num1.id - num2.id)
    const campo = returnAllCamposSchema.parse(campoSort)
    return campo


}