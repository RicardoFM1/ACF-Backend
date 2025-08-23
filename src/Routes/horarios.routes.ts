import { Router } from "express";
import { CreateHorarioController, DeleteHorarioController, getAllHorariosController, getHorariosByCampoIdController, UpdateHorarioController } from "../controllers/horarios.controllers";


export const horariosRoutes:Router = Router()

horariosRoutes.post("", CreateHorarioController)
horariosRoutes.get("", getAllHorariosController)
horariosRoutes.get("/:campoId/:diaSemana", getHorariosByCampoIdController)
horariosRoutes.patch("/:id", UpdateHorarioController)
horariosRoutes.delete("/:id", DeleteHorarioController)