import Joi from "joi"
import { StatusCodes } from "http-status-codes"
import ApiError from "../utils/ApiError.js"

const createNew = async (req, res, next) => {
  const correctCondition = Joi.object({
    title: Joi.string().max(255).required(),
    description: Joi.string().allow('').max(65535),
    price: Joi.number().integer().positive().required(),
    image_url: Joi.string().uri().required(),
    calories: Joi.string().allow('').max(50),
    quantity: Joi.string().allow('').max(50),
    category_id: Joi.number().integer().positive().required()
  })

  try {
    await correctCondition.validateAsync(req.body, { abortEarly: false })
    next()
  } catch (error) {
    next(new ApiError(StatusCodes.UNPROCESSABLE_ENTITY, new Error(error).message))
  }
}

export const foodItemValidation = {
  createNew
}