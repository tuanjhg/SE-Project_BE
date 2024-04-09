const Food = require('../models/food');

async function getAllFoodItems() {
    try {
        const foodItems = await Food.findAll();
        return foodItems;
    } catch (error) {
        throw new Error('Error fetching food items:', error);
    }
}

module.exports = {
    getAllFoodItems
};