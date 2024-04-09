const { DataTypes } = require('sequelize');
const sequelize = require('../config/postgres');

const CartItem = sequelize.define('CartItem', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = CartItem;
