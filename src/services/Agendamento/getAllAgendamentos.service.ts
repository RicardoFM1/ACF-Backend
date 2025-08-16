import { Repository } from "typeorm"
import { Agendamentos } from "../../entities/agendamentos.entitie"
import { AppDataSource } from "../../data-source"
import { returnAllAgendamentosSchema } from "../../schemas/agendamentos.schemas"

export const GetAllAgendamentosService = async() => {
    const agendamentoRepository:Repository<Agendamentos> = AppDataSource.getRepository(Agendamentos)

    const agendamentosFind:Agendamentos[] = await agendamentoRepository.find({
        relations:{
            campos: {
                horarios: true
            },
            usuarios: true
        }
    })
    const agendamentos = returnAllAgendamentosSchema.parse(agendamentosFind)
    return agendamentos
}