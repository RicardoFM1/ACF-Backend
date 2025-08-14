import { Router } from "express";
import { CreateHorarioController } from "../controllers/horarios.controllers";

export const horariosRoutes:Router = Router()

horariosRoutes.post("", CreateHorarioController)