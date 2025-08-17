import { Repository } from "typeorm";
import { iCreateAgendamento, iReturnAgendamento, returnAgendamentoSchema } from "../../schemas/agendamentos.schemas";
import { Agendamentos } from "../../entities/agendamentos.entitie";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";

export const UpdateAgendamentosService = async(agendamentoId:string, agendamentoData:iCreateAgendamento):Promise<iReturnAgendamento> => {
    const agendamentoRepository:Repository<Agendamentos> = AppDataSource.getRepository(Agendamentos)

    const agendamentosFind:Agendamentos|null = await agendamentoRepository.findOne({
        where:{
            id: parseInt(agendamentoId)
        },
        relations:{
            campos:{
                horarios: true
            },
            usuarios: true
        }
    })
    if(!agendamentosFind){
        throw new AppError("Agendamento não encontrado!")
    }
    const agendamentoCreate = agendamentoRepository.create({
        ...agendamentosFind,
        ...agendamentoData
    })
    await agendamentoRepository.save(agendamentoCreate)
    const agendamento = returnAgendamentoSchema.parse(agendamentoCreate)
    return agendamento
}