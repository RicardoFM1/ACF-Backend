import { Router } from "express";
import { createAgendamentoController } from "../controllers/agendamentos.controllers";

export const agendamentosRoutes:Router = Router()

agendamentosRoutes.post("", createAgendamentoController)