import { Router } from "express";
import { createAgendamentoController, GetAllAgendamentosController } from "../controllers/agendamentos.controllers";

export const agendamentosRoutes:Router = Router()

agendamentosRoutes.post("", createAgendamentoController)
agendamentosRoutes.get("", GetAllAgendamentosController)
agendamentosRoutes.patch("")
agendamentosRoutes.delete("")