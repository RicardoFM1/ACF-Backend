import { Router } from "express";
import { CreateCamposController, DeleteCampoController, getAllCamposController, UpdateCampoController } from "../controllers/campos.controllers";


export const camposRoutes:Router = Router()

camposRoutes.post("", CreateCamposController)
camposRoutes.get("", getAllCamposController)
camposRoutes.patch("/:id", UpdateCampoController)
camposRoutes.delete("/:id", DeleteCampoController)