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

module.exports = {
  db,
  getAllCars,
  getAllCarsBySeries,
}
