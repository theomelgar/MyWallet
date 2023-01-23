import { deleteOperation, income, outcome, register, updateIncome, updateOutcome } from "../controller/Operations.js";
import { Router } from "express";
import { validateSchema } from "../middleware/validateSchema.js";
import { operationSchema } from "../schemas/OperationSchema.js";
import { authValidation } from "../middleware/AuthMiddleware.js";

const operationsRouter = Router()

operationsRouter.use(authValidation)
operationsRouter.get("/home", register)
operationsRouter.delete("/home/:id", deleteOperation)
operationsRouter.post("/nova-entrada", validateSchema(operationSchema), income)
operationsRouter.put("/editar-entrada/:id", validateSchema(operationSchema), updateIncome)
operationsRouter.post("/nova-saida", validateSchema(operationSchema), outcome)
operationsRouter.put("/editar-saida/:id", validateSchema(operationSchema), updateOutcome)

export default operationsRouter