import { Request, Response } from "express";
import { CreateHorarioService } from "../services/Horario/createHorario.service"
import { getAllHorarioService } from "../services/Horario/getAllHorarios.service";

export const CreateHorarioController = async (req: Request, res: Response):Promise<Response> =>{
    const horarioData = req.body
    const horario = await CreateHorarioService(horarioData)
    return res.status(201).json(horario)
}
export const getAllHorariosController = async(req:Request, res:Response):Promise<Response> => {
    const horario = await getAllHorarioService() 
    return res.status(200).json(horario)
}
 