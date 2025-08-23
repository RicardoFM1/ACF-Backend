import { Repository } from "typeorm"
import { AppDataSource } from "../../data-source"
import { Horarios } from "../../entities/horarios.entitie"
import { iReturnAllHorarios, returnAllHorariosSchema } from "../../schemas/horarios.schemas"
import { AppError } from "../../errors"

export const getHorariosByCampoIdService = async(campoId:string, diaSemana:string):Promise<iReturnAllHorarios> => {
    const horarioRepository:Repository<Horarios> =AppDataSource.getRepository(Horarios)

    const horarioFind:Horarios[] = await horarioRepository.find({
        where:{
            campos: {
                id: parseInt(campoId)
            },
            dia_da_semana: diaSemana
        },
    
        relations:{
            campos: true
        }
    }) 

    if(!horarioFind){
        throw new AppError("Horario não encontrado!")
    }
    const horariosSort = horarioFind.sort((num1, num2) => num1.id - num2.id)
    const horario = returnAllHorariosSchema.parse(horariosSort)
     return horario
}