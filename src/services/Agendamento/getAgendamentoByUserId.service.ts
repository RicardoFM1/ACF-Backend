import { Repository } from "typeorm";
import { iReturnAgendamento, returnAgendamentoSchema } from "../../schemas/agendamentos.schemas";
import { Agendamentos } from "../../entities/agendamentos.entitie";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";


export const GetAgendamentoByUserIdService = async(userId:string):Promise<iReturnAgendamento> => {
    const agendamentoRepository:Repository<Agendamentos> = AppDataSource.getRepository(Agendamentos)

    const agendamentoFind:Agendamentos|null = await agendamentoRepository.findOne({
        where:{
          usuarios: {
            id: parseInt(userId)
          }
        },
        relations: {
            usuarios: true,
            campos: true
        }
    })
    if(!agendamentoFind){
        throw new AppError("Agendamento do usuario não encontrado!")
    }
   const agendamento = returnAgendamentoSchema.parse(agendamentoFind)
   return agendamento
}