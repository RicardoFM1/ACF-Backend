import { Request, Response } from "express";
import { CreateCamposService } from "../services/createCampo.service";
import { iReturnCampo } from "../schemas/campos.schemas";

export const CreateCamposController = async (req: Request, res: Response):Promise<Response> =>{
    const campoData = req.body

    const campo:iReturnCampo = await CreateCamposService(campoData)
    return res.status(200).json(campo)
}   