import { Sequelize } from 'sequelize';
import { env } from './environment.js';

const sequelize = new Sequelize(env.SQL_URL)

const connectToDatabase = async () => {
  try {
    await sequelize.authenticate()
    await runMigrations()
    console.log('database connected')
  } catch (err) {
    console.log('connecting database failed')
    return process.exit(1)
  }
  return null
}

export default sequelize