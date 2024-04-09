const Sequelize = require('sequelize')
const env = require('./environment')

const sequelize = new Sequelize(env.SQL_URL)

module.exports = sequelize
