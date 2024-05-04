import express from 'express'
import { env } from './config/environment.js'
import { APIs } from './routes/index.js'
import { errorHandlingMiddleware } from './middlewares/errorHandlingMiddleware.js'


const START_SERVER = () => {
  const app = express()
  app.use(express.json())
  app.use(APIs)
  app.use(errorHandlingMiddleware)

  app.listen(env.APP_PORT, env.APP_HOST, () => {
    console.log(`Server running at http://${env.APP_HOST}:${env.APP_PORT}`)
  })
}

START_SERVER()