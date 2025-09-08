import { Router } from "express";
import { CreateHorarioController, DeleteHorarioController, 
getAllHorariosController, getHorariosByCampoIdController, getHorariosByCampoIdEDiaDaSemanaController, 
UpdateHorarioController } from "../controllers/horarios.controllers";
import { getHorariosByCampoIdEDiaDaSemanaService } from "../services/Horario/getHorarioByCampoIdEDiaDaSemana.service";


export const horariosRoutes:Router = Router()

horariosRoutes.post("", CreateHorarioController)
horariosRoutes.get("", getAllHorariosController)
horariosRoutes.get("/:campoId/:diaSemana", getHorariosByCampoIdEDiaDaSemanaController)
horariosRoutes.get("/:campoId", getHorariosByCampoIdController)
horariosRoutes.patch("/:id", UpdateHorarioController)
horariosRoutes.delete("/:id", DeleteHorarioController)