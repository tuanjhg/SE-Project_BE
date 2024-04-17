const express = require( 'express')
const env = require( './config/environment')
const FoodRoute  = require( './routes/FoodRouter')
const AuthRoute  = require( './routes/AuthRouter')
const app = express();
app.get('/', (req, res) =>{
    res.send('<h1>Hello World!</h1>')
})
app.use('/', FoodRoute);
app.use('/', AuthRoute);

app.listen(env.APP_PORT, env.APP_HOST, ()=>{
    console.log(`Server running at http://${env.APP_HOST}:${env.APP_PORT}`)
})