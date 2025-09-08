import { Repository } from "typeorm"
import { Agendamentos } from "../../entities/agendamentos.entitie"
import { AppDataSource } from "../../data-source"
import { iReturnAgendamento, iReturnAllAgendamentos, returnAllAgendamentosSchema } from "../../schemas/agendamentos.schemas"
import { AppError } from "../../errors"

export const GetAllAgendamentosService = async(status:string):Promise<iReturnAllAgendamentos> => {
    const agendamentoRepository:Repository<Agendamentos> = AppDataSource.getRepository(Agendamentos)

    const agendamentosFind:Agendamentos[] = await agendamentoRepository.find({
        where:{
            status: status
        },
        relations:{
            campos: true,
            usuarios: true
        },order:{
            id:"DESC"
        }
    })
    if(!agendamentosFind){
        throw new AppError("Agendamento não encontrado!")
    }
  
    const agendamentos = returnAllAgendamentosSchema.parse(agendamentosFind)
    return agendamentos
}