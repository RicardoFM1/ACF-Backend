import { Router } from "express";
import { createAgendamentoController, DeleteAgendamentoController, GetAllAgendamentosController, UpdateAgendamentosController } from "../controllers/agendamentos.controllers";

export const agendamentosRoutes:Router = Router()

agendamentosRoutes.post("", createAgendamentoController)
agendamentosRoutes.get("", GetAllAgendamentosController)
agendamentosRoutes.patch("/:id", UpdateAgendamentosController)
agendamentosRoutes.delete("/:id", DeleteAgendamentoController)