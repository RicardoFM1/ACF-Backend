import { Request, Response } from "express";
import { createAgendamentoService } from "../services/Agendamento/createAgendamento.service";
import { iReturnAgendamento } from "../schemas/agendamentos.schemas";

export const createAgendamentoController = async(req:Request, res:Response):Promise<Response> =>{
    const agendamentoData = req.body

    const agendamento:iReturnAgendamento = await createAgendamentoService(agendamentoData)
    //return agendamento
    return res.status(201).json(agendamento)    
}