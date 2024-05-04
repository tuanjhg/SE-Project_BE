import FoodCategory from "../models/FoodCategory.js";
import { slugify } from "../utils/formatters.js"

const createNew = async (data) => {
  try {
    const newCategory = {
      ...data,
      url_param: slugify(data.name)
    }
    return await FoodCategory.create(newCategory)
  } catch (error) {
    throw error
  }
}

const getAll = async () => {
  try {
    return await FoodCategory.findAll();
  } catch (error) {
    throw error
  }
};

const deleteById = async (id) => {
  try {
    return await FoodCategory.destroy({ where: { id } });
  }
  catch (error) {
    throw error
  }
};

const updateItem = async (id, updatedData) => {
  try {
    updatedData.url_param = slugify(updatedData.name)
    const [updatedRowsCount, updatedRows] = await FoodCategory.update(updatedData, {
      where: { id },
      returning: true,
    });

    if (updatedRowsCount === 0) {
      return null;
    }

    return updatedRows[0];
  } catch (error) {
    throw error;
  }
};

export const foodCategoryService = {
  createNew, getAll, deleteById, updateItem
}