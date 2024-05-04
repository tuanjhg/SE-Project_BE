import Joi from "joi"
import { StatusCodes } from "http-status-codes"
import ApiError from "../utils/ApiError.js"

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    name: Joi.string().max(100).required(),
    icon: Joi.string().max(50).required()
  })

  try {
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
  }
}

export const foodCategoryValidation = {
  createNew
}