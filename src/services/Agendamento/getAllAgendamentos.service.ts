import { Repository } from "typeorm"
import { Agendamentos } from "../../entities/agendamentos.entitie"
import { AppDataSource } from "../../data-source"
import { iReturnAgendamento, iReturnAllAgendamentos, returnAllAgendamentosSchema } from "../../schemas/agendamentos.schemas"
import { AppError } from "../../errors"

export const GetAllAgendamentosService = async():Promise<iReturnAllAgendamentos> => {
    const agendamentoRepository:Repository<Agendamentos> = AppDataSource.getRepository(Agendamentos)

    const agendamentosFind:Agendamentos[] = await agendamentoRepository.find({
        relations:{
            campos: {
                horarios: true
            },
            usuarios: true
        }
    })
    if(!agendamentosFind){
        throw new AppError("Agendamento não encontrado!")
    }
    const agendamentosSort = agendamentosFind.sort((num1, num2) => num1.id - num2.id)
    const agendamentos = returnAllAgendamentosSchema.parse(agendamentosSort)
    return agendamentos
}