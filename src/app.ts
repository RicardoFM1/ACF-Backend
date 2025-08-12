import 'express-async-errors'
import express, { Application } from "express"

import { handleErrors } from "./errors"

import cors from "cors"
import { loginRoutes } from './Routes/login.routes'
import { usuariosRoutes } from './Routes/usuarios.routes'


const app:Application = express()

app.use(cors())
app.use(express.json())
app.use("/login", loginRoutes )
app.use("/usuarios", usuariosRoutes)

app.use(handleErrors)
export default app