import { Router } from "express";
import { CreateCamposController } from "../controllers/campos.controllers";


export const camposRoutes:Router = Router()

camposRoutes.post("", CreateCamposController)