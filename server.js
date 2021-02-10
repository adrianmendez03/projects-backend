// ENVIROMENT VARIABLES
require('dotenv').config()
const { PORT = 3000, NODE_ENV = "developement" } = process.env

// CORS
const cors = require('cors')

// EXPRESS
const express = require('express')
const app = express()

// OTHER IMPORTS
const morgan = require('morgan')

// MIDDLEWARE
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

// ROUTES AND ROUTERS
//

// Default Route
app.get('/', (req, res) => {
    res.json({ msg: "Default route... Nothing to see here..."})
})

// LISTENER
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})