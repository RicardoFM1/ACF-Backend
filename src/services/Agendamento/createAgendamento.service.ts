import { Repository } from "typeorm";
import { iCreateAgendamento, iReturnAgendamento, returnAgendamentoSchema } from "../../schemas/agendamentos.schemas";
import { Agendamentos } from "../../entities/agendamentos.entitie";
import { AppDataSource } from "../../data-source";
import { Usuarios } from "../../entities/usuarios.entitie";
import { Campos } from "../../entities/campos.entitie";

import { AppError } from "../../errors";

export const createAgendamentoService = async(agendamentoData:iCreateAgendamento):Promise<iReturnAgendamento> =>{
    const agendamentoRepository:Repository<Agendamentos> = AppDataSource.getRepository(Agendamentos)
    const usuarioRepository:Repository<Usuarios> = AppDataSource.getRepository(Usuarios)
    const campoRepository:Repository<Campos> = AppDataSource.getRepository(Campos)
    const usuarioFind = await usuarioRepository.findOne({
        where:{
            id: agendamentoData.usuariosId
        }
        
        
    })
    const campoFind:Campos|null = await campoRepository.findOne({
        where:{
            id: agendamentoData.camposId
        }
    })
    if(!usuarioFind){
        throw new AppError("Usuario não encontrado!")
    }

    if(!campoFind){
        throw new AppError("Campo não encontrado!")
    }

    const createAgendamento:Agendamentos = agendamentoRepository.create({
        ...agendamentoData,
        campos:  campoFind,
        usuarios: usuarioFind
    })
    await agendamentoRepository.save(createAgendamento)


return returnAgendamentoSchema.parse(createAgendamento);
}