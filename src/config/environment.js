require('dotenv').config()

const env = {
    APP_HOST: process.env.APP_HOST,
    APP_PORT: process.env.APP_PORT,
    SQL_URL: process.env.SQL_URL
}

module.exports = env