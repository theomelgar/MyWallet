import { signIn, signUp } from "../controller/Auth.js"
import { Router } from 'express'
import { validateSchema } from "../middleware/validateSchema.js"
import {userSchema, loginSchema} from "../schemas/AuthSchema.js"

const authRouter = Router()

// Rotas de autenticação
authRouter.post("/cadastro", validateSchema(userSchema), signUp)
authRouter.post("/", validateSchema(loginSchema), signIn)

export default authRouter