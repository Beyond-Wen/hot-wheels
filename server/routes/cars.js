const express = require('express')

const db = require('../db/db')

const router = express.Router()

//wire up router

//resources for use on pages
//GET
router.get('/', (req, res) => {
  db.getAllCars()
    .then((cars) => {
      res.json(cars)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.get('/:id', (req, res) => {
  db.getAllCarsBySeries(req.params.id)
    .then((cars) => {
      res.json(cars)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/addcar', (req, res) => {
  const carObject = req.body
  db.addNewCar(carObject)
    .then(() => {
      res.sendStatus(201)
    })
    .catch((err) => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})
module.exports = router
