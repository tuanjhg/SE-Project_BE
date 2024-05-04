import { StatusCodes } from "http-status-codes"
import { foodItemService } from "../services/foodItemService.js"
import ApiError from "../utils/ApiError.js"

const createNew = async (req, res, next) => {
  try {
    const createdFoodItem = await foodItemService.createNew(req.body)
    res.status(StatusCodes.CREATED).json(createdFoodItem)
  } catch (error) {
    next(error)
  }
}

const showAll = async (req, res, next) => {
  try {
    const foodItems = await foodItemService.getAll(req.body)
    res.status(StatusCodes.OK).json(foodItems)
  } catch (error) {
    next(error)
  }
}

const deleteById = async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedItemId = await foodItemService.deleteById(id);
    if (!deletedItemId) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Food item not found' });
    }
    res.status(StatusCodes.NO_CONTENT).send();
  } catch (error) {
    next(error)
  }
}

const updateItem = async (req, res, next) => {
  try {
    const { id } = req.params
    const updateData = req.body
    const updatedItem = await foodItemService.updateItem(id, updateData);
    if (!updatedItem) {
      return res.status(StatusCodes.NOT_FOUND).json({ error: 'Food item not found' });
    }
    res.status(StatusCodes.OK).json(updateItem);
  } catch (error) {
    next(error)
  }
}

export const foodItemController = {
  createNew, showAll, deleteById, updateItem
}