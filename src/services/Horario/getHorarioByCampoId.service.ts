import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Horarios } from "../../entities/horarios.entitie"
import { iReturnAllHorarios, iReturnHorario, returnAllHorariosSchema, returnHorarioSchema } from "../../schemas/horarios.schemas"
import { AppError } from "../../errors"
import { Agendamentos } from "../../entities/agendamentos.entitie"

export const getHorariosByCampoIdService = async(campoId:string, diaSemana:string):Promise<any> => {
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
        console.log(findAgendamentos,"agendamentos")
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

    //const horariosSort = horarioFind.sort((num1, num2) => num1.id - num2.id)
    const obj={
        ...horarioFind,
        agendamentos:findAgendamentos
    }
    const horario = returnHorarioSchema.parse(obj)
     return horario
}