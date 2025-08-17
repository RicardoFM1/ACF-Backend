import { Request, Response } from "express";
import { createAgendamentoService } from "../services/Agendamento/createAgendamento.service";
import { iReturnAgendamento } from "../schemas/agendamentos.schemas";
import { GetAllAgendamentosService } from "../services/Agendamento/getAllAgendamentos.service";
import { UpdateAgendamentosService } from "../services/Agendamento/updateAgendamento.service";
import { DeleteAgendamentoService } from "../services/Agendamento/deleteAgendamento.service";

export const createAgendamentoController = async(req:Request, res:Response):Promise<Response> =>{
    const agendamentoData = req.body

    const agendamento:iReturnAgendamento = await createAgendamentoService(agendamentoData)
    //return agendamento
    return res.status(201).json(agendamento)    
}

export const GetAllAgendamentosController = async(req:Request, res:Response):Promise<Response> =>{
    const agendamentos = await GetAllAgendamentosService()
    return res.status(200).json(agendamentos)
}

export const UpdateAgendamentosController = async(req:Request, res:Response):Promise<Response> => {
    const agendamentoId = req.params.id
    const agendamentoData = req.body

    const agendamento = await UpdateAgendamentosService(agendamentoId, agendamentoData)
    return res.status(200).json(agendamento)
}

export const DeleteAgendamentoController = async(req:Request, res:Response):Promise<Response> => {
    const agendamentoId:string = req.params.id

    await DeleteAgendamentoService(agendamentoId)
    return res.status(200).json("Agendamento deletado com sucesso!")
}