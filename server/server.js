const express = require('express')
const path = require('path')

const server = express()

const carsRoutes = require('./routes/cars')

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/cars', carsRoutes)

module.exports = server
