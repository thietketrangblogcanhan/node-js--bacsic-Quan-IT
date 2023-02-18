import express from 'express'
import homeController from '../controller/homeController.js'
let router = express.Router()

const initWebRoute = app => {
  router.get('/', homeController.getHomepage)

  router.get('/about', (req, res) => {
    res.send(`I'am Quan`)
  })

  return app.use('/', router)
}

module.exports = initWebRoute
