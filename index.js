require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/api')

// express app
const app = express()

// middleware
// Using JSON library for array type fields information.
app.use(express.json())
// Cors enables to use cross-origin data sources
app.use(cors())


app.use((req, res, next) => {
  // below will write to console the http request path and used method 
  console.log(req.path, req.method)
  next()
})

// Routes
app.use('/api', routes)

// connect to db
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () => {
      console.log('Connected to database, listening on port', process.env.PORT || 3001)
    })
  })
  .catch((error) => {
    console.log(error)
})
