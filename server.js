const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello World! nodejs basic')
})

app.get('/about', (req, res) => {
  res.send(`I'am Quan`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
