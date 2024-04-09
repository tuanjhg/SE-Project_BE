const express = require('express')
const app = express()
const env = require('./config/environment')
const {getAllFoodItems} = require('./controllers/dataController')

app.get('/', (req, res) =>{
    res.send('<h1>Hello World!</h1>')
})

app.get('/food', async (req, res) => {
    try {
      const foodItems = await getAllFoodItems();
      res.json(foodItems);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });


app.listen(env.APP_PORT, env.APP_HOST, ()=>{
    console.log(`Server running at http://${env.APP_HOST}:${env.APP_PORT}`)
})