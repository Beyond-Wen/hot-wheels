const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const db = require('knex')(config)

//write db functions here
function getAllCars() {
  return db('cars').select()
}

function getAllCarsBySeries(id) {
  return db('seriescars')
    .where('seriescars.series_id', id)
    .join('cars', 'car_id', 'cars.id')
    .join('series', 'cars.series_id', 'series.id')
    .select()
}

function addNewCar(car) {
  return db('cars').insert(car)
}

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
