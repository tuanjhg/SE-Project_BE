const router = require('express').Router();
const getAllFoodItems = require('../controllers/FoodController');
router.route('/food').get(getAllFoodItems);
module.exports = router;