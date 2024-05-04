import FoodItem from "../models/FoodItem.js"

const createNew = async (data) => {
  try {
    return await FoodItem.create(data)
  } catch (error) {
    throw error
  }
}

const getAll = async () => {
  try {
    return await FoodItem.findAll();
  } catch (error) {
    throw error
  }
};

const deleteById = async (id) => {
  try {
    return await FoodItem.destroy({ where: { id } });
  }
  catch (error) {
    throw error
  }
};

const updateItem = async (id, updatedData) => {
  try {
    const [updatedRowsCount, updatedRows] = await FoodItem.update(updatedData, {
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

export const foodItemService = {
  createNew, getAll, deleteById, updateItem
}