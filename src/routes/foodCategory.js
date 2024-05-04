import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { foodItemValidation } from '../validations/foodItemValidation.js'
import { foodItemController } from '../controllers/foodItemController.js'
import { foodCategoryController } from '../controllers/foodCategoryController.js'

const Router = express.Router()

Router.route('/')
  .get(foodCategoryController.showAll)
  .post(foodCategoryController.createNew, foodCategoryController.createNew)

Router.route('/:id')
  .put(foodCategoryController.updateItem)
  .delete(foodCategoryController.deleteById)

  export const FoodCategoryRouters = Router