import { Router } from "express";
import { CreateHorarioController, getAllHorariosController, UpdateHorarioController } from "../controllers/horarios.controllers";
import { getAllCamposController } from "../controllers/campos.controllers";

export const horariosRoutes:Router = Router()

horariosRoutes.post("", CreateHorarioController)
horariosRoutes.get("", getAllHorariosController)
horariosRoutes.patch("/:id", UpdateHorarioController)
horariosRoutes.delete("")