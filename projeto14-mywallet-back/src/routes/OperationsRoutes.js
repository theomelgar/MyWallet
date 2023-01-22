import { income, outcome, register } from "../controller/Operations.js";
import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { operationSchema } from "../schemas/OperationSchema.js";
import { authValidation } from "../middleware/AuthMiddleware.js";

const operationsRouter = Router()

operationsRouter.use(authValidation)
operationsRouter.get("/home", register)
operationsRouter.post("/nova-entrada", validateSchema(operationSchema), income)
operationsRouter.post("/nova-saida", validateSchema(operationSchema), outcome)

export default operationsRouter