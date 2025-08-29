import { Repository } from "typeorm"
import { Horarios } from "../../entities/horarios.entitie"
import { AppDataSource } from "../../data-source"
import { iCreateHorario, iCreateHorarios, iReturnHorario, returnAllHorariosSchema, returnHorarioSchema } from "../../schemas/horarios.schemas"
import { AppError } from "../../errors"

export const UpdateHorarioService = async(campoId:string, horarioData:iCreateHorarios):Promise<any> => {
    const horarioRepository:Repository<Horarios> = AppDataSource.getRepository(Horarios)
//iReturnHorario[]
    const horariosFind:Horarios[]|[] = await horarioRepository.find({
        where:{
          
            campos:{
                id:parseInt(campoId)
            }
        },
        relations:{
            campos: true
        }
    })
    let horarios =[]
    for(const horario of horarioData){
        
        const findHorario = horariosFind.find((item)=>item.dia_da_semana===horario.dia_da_semana)
    
            const createHorario = horarioRepository.create({
                ...findHorario,
                ...horario,campos:{
                    id:horario.camposId
                }
            })
            await horarioRepository.save(createHorario)
        horarios.push(createHorario)
    }
   
     const horariosReturn = returnAllHorariosSchema.parse(horarios)
    return horariosReturn
}