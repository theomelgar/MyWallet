import joi from "joi";

export const operationSchema = joi.object({
    value: joi.string().required(),
    description: joi.string().required()
})