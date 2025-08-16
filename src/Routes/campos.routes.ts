import { Router } from "express";
import { CreateCamposController, getAllCamposController } from "../controllers/campos.controllers";


export const camposRoutes:Router = Router()

camposRoutes.post("", CreateCamposController)
camposRoutes.get("", getAllCamposController)
camposRoutes.patch("")
camposRoutes.delete("")