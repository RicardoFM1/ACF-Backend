import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Horarios } from "../../entities/horarios.entitie"
import { returnHorarioSchema } from "../../schemas/horarios.schemas"
import { AppError } from "../../errors"
import { Agendamentos } from "../../entities/agendamentos.entitie"

export const getHorariosByCampoIdEDiaDaSemanaService = async(campoId:string, diaSemana:string):Promise<any> => {
    const horarioRepository:Repository<Horarios> =AppDataSource.getRepository(Horarios)
     const agendamentoRepository:Repository<Agendamentos> = AppDataSource.getRepository(Agendamentos)
    const findAgendamentos:Agendamentos[]|[]=await agendamentoRepository.find({
        where:{
            campos:{
                id:parseInt(campoId)
            }
            

        },
        relations:{
            campos:true
        }
    })
     const horarioFind:Horarios|null = await horarioRepository.findOne({
        where:{
            campos: {
                id: parseInt(campoId)
            },
            dia_da_semana: diaSemana
        },
    
        relations:{
            campos: true
        },order:{
            id:"DESC"
        }
    }) 

    if(!horarioFind){
        throw new AppError("Horario não encontrado!")
    }

    if(!findAgendamentos){
        throw new AppError("Agendamento não encontrado!")
    }
  
    const obj={
        ...horarioFind,
        agendamentos:findAgendamentos
    }
    const horario = returnHorarioSchema.parse(obj)
     return [horario]
}