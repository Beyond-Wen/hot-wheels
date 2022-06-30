const config = require('./knexfile')
const knex = require('knex')
const testDb = knex(config.test)

const { db, getAllCars, getAllCarsBySeries } = require('./db')

//get it to pristine
beforeAll(() => {
  return db.migrate.latest()
})
beforeEach(() => {
  return db.seed.run()
})

//GET
describe('getAllCars', () => {
  test('this function should pull all the cars out of the db', () => {
    return getAllCars().then((result) => {
      // console.log(result)
      expect(result).toHaveLength(6)
    })
  })
})

describe('getAllCarsBySeries', () => {
  test('this function should pull all the series with their cars out of the db', () => {
    return getAllCarsBySeries(1).then((result) => {
      expect(result).toHaveLength(2)
      expect(result[0].model_name).toBe('Tour de Fast')
      expect(result[0].series_name).toBe('Sporty Sportscars')
    })
  })
})

//POST
describe('addNewCar', () => {
  test.todo('this function should add a car into the db')
})

//update

//delete
