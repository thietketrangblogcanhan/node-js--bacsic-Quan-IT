import express from 'express'
import configViewEngine from './configs/viewEngine'
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8080

configViewEngine(app)
// sendFile will go here
app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port)
console.log('Server started at http://localhost:' + port)
