const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

//write db functions here

//gets
function getAllCars(db) {
  return db('cars').select()
}

function getAllCarsBySeries(id, db) {
  return db('seriescars')
    .where('seriescars.series_id', id)
    .join('cars', 'car_id', 'cars.id')
    .join('series', 'cars.series_id', 'series.id')
    .select()
}

//posts

function addNewCar(carObject, db) {
  //need to check if car exists before inserting (stretch)
  //connecting car_id and series_id
  //added id according to heroku instructions.
  return db('cars').insert(carObject, 'id')
}

//update
function updateCar(id, car) {
  return db('cars').where('id', id).update(car)
}

function deleteCar(id) {
  return db('cars').where('id', id).del()
}

module.exports = {
  db,
  getAllCars,
  getAllCarsBySeries,
  addNewCar,
  updateCar,
  deleteCar,
}
