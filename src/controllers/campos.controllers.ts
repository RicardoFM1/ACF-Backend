import { Request, Response } from "express";
import { CreateCamposService } from "../services/Campo/createCampo.service";
import { iReturnCampo } from "../schemas/campos.schemas";
import { getAllCamposService } from "../services/Campo/getAllCampos.service";
import { UpdateCampoService } from "../services/Campo/updateCampo.service";
import { DeleteCampoService } from "../services/Campo/deleteCampo.service";

export const CreateCamposController = async (req: Request, res: Response):Promise<any> =>{
    const campoData = req.body

    const campo:iReturnCampo = await CreateCamposService(campoData)
    return res.status(201).json(campo)
}   

export const getAllCamposController = async(req:Request, res:Response):Promise<Response> => { 
    const campo = await getAllCamposService()
     return res.status(200).json(campo)
}

export const UpdateCampoController = async(req:Request, res:Response):Promise<Response> => {
    const campoId = req.params.id
    const campoData = req.body

    const campo = await UpdateCampoService(campoId, campoData)
    return res.status(200).json(campo)
}

export const DeleteCampoController = async(req:Request, res:Response):Promise<Response> => {
    const campoId = req.params.id

    await DeleteCampoService(campoId)
    return res.status(200).json("Campo deletado com sucesso!")
}