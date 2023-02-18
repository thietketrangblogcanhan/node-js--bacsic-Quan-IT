import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoute from './route/web'
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8080

// set view engine
configViewEngine(app)

//init web Route
initWebRoute(app)

app.listen(port)
console.log('Server started at http://localhost:' + port)
