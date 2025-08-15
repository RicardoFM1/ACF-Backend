import { Request, Response } from "express";
import { createAgendamentoService } from "../services/Agendamento/createAgendamento.service";

export const createAgendamentoController = async(req:Request, res:Response):Promise<any> =>{
    const agendamentoData = req.body

    const agendamento = await createAgendamentoService(agendamentoData)
    return agendamento
}