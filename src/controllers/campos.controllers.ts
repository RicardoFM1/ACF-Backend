import { Request, Response } from "express";
import { CreateCamposService } from "../services/Campo/createCampo.service";
import { iReturnCampo } from "../schemas/campos.schemas";

export const CreateCamposController = async (req: Request, res: Response):Promise<any> =>{
    const campoData = req.body

    const campo:iReturnCampo = await CreateCamposService(campoData)
    return res.status(201).json(campo)
}   