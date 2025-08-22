import { Repository } from "typeorm";
import {  iReturnAgendamento, iReturnAllAgendamentos, returnAgendamentoSchema, returnAllAgendamentosSchema } from "../../schemas/agendamentos.schemas";
import { Agendamentos } from "../../entities/agendamentos.entitie";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors";


export const GetAgendamentoByUserIdService = async(userId:string):Promise<iReturnAllAgendamentos> => {
    const agendamentoRepository:Repository<Agendamentos> = AppDataSource.getRepository(Agendamentos)

    const agendamentoFind:Agendamentos[]|[] = await agendamentoRepository.find({
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
    const agendamentosSort = agendamentoFind.sort((num1, num2) => num1.id - num2.id)
   const agendamento = returnAllAgendamentosSchema.parse(agendamentosSort)
   return agendamento
}