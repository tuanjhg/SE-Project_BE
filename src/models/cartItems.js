import { DataTypes } from 'sequelize';
import sequelize  from './config/postgres.js';

export const CartItem = sequelize.define('CartItem', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});
