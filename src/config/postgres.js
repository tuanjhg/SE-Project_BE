const Sequelize = require('sequelize')
const env = require('./environment')

const sequelize = new Sequelize(('database', 'username', 'password', {
    dialect: 'postgres'})
)

module.exports = sequelize