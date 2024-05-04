import { DataTypes, Model } from 'sequelize'
import sequelize from '../config/postgres.js';

class FoodItem extends Model { }


FoodItem.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  quantity: {
    type: DataTypes.STRING(50)
  },
  calories: {
    type: DataTypes.STRING(50)
  },
  category_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'food_categories',
      key: 'id'
    }
  }
}, {
  sequelize,
  underscored: true,
  timestamps: false,
  modelName: 'food_item'
});

export default FoodItem