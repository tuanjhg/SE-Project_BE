import express from 'express'
import { StatusCodes } from 'http-status-codes'
import { FoodItemRouters } from './foodItemRoutes.js'
import { FoodCategoryRouters } from './foodCategory.js'

const Router = express.Router()

Router.get('/status', (req, res) => {
  res.status(StatusCodes.OK).json({ message: 'lmao' })
})

Router.use('/foodItem', FoodItemRouters)
Router.use('/foodCategory', FoodCategoryRouters)

export const APIs = Router
