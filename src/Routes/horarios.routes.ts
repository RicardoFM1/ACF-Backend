import { Router } from "express";
import { CreateHorarioController, DeleteHorarioController, getAllHorariosController, UpdateHorarioController } from "../controllers/horarios.controllers";


export const horariosRoutes:Router = Router()

horariosRoutes.post("", CreateHorarioController)
horariosRoutes.get("", getAllHorariosController)
horariosRoutes.patch("/:id", UpdateHorarioController)
horariosRoutes.delete("/:id", DeleteHorarioController)