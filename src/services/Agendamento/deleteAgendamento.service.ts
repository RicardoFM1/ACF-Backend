import { Repository } from "typeorm"
import { Agendamentos } from "../../entities/agendamentos.entitie"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors"

export const DeleteAgendamentoService = async(agendamentoId:string) => {
    const agendamentoRepository:Repository<Agendamentos> = AppDataSource.getRepository(Agendamentos)

    const agendamentoFind:Agendamentos|null = await agendamentoRepository.findOne({
        where:{
            id: parseInt(agendamentoId)
        }
    })
    if(!agendamentoFind){
        throw new AppError("Agendamento não encontrado!")
    }
    await agendamentoRepository.remove(agendamentoFind)
}