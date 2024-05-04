import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { foodItemValidation } from '../validations/foodItemValidation.js'
import { foodItemController } from '../controllers/foodItemController.js'

const Router = express.Router()

Router.route('/')
  .get(foodItemController.showAll)
  .post(foodItemValidation.createNew, foodItemController.createNew)

Router.route('/:id')
  .put(foodItemController.updateItem)
  .delete(foodItemController.deleteById)

  export const FoodItemRouters = Router