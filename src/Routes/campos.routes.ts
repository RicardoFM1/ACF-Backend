import { Router } from "express";
import { CreateCamposController, DeleteCampoController, getAllCamposController, GetCamposByIdController, UpdateCampoController } from "../controllers/campos.controllers";


export const camposRoutes:Router = Router()

camposRoutes.post("", CreateCamposController)
camposRoutes.get("", getAllCamposController)
camposRoutes.get("/:id", GetCamposByIdController)
camposRoutes.patch("/:id", UpdateCampoController)
camposRoutes.delete("/:id", DeleteCampoController)