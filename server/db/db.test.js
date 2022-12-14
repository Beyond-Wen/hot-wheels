const config = require('./knexfile')
const knex = require('knex')
const testDb = knex(config.test)

const { db, getAllCars, getAllCarsBySeries, addNewCar } = require('./db')

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
      console.log(result)
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

// //POST
describe('addNewCar', () => {
  test('this function should add a car into the db', () => {
    const testObject = {
      model_name: 'Mercedes Benz',
      model_image: 'link',
      series_id: 3,
      year: 2019,
    }
    expect.assertions(1)
    return addNewCar(testObject).then(() => {
      return db('cars')
        .select()
        .then((cars) => {
          console.log(cars)
          const lastCar = cars[cars.length - 1]
          expect(lastCar.model_name).toBe('Mercedes Benz')
        })
    })
  })
})

// //PATCH? (PUT)
// describe('updateCar', () => {
//   test.todo('this function should modify a car in the db')
// })

// //DEL
// describe('delCar', () => {
//   test.todo('this function should delete a car in the db')
// })

// beforeAll(() => {
//   return testDb.migrate.latest()
// })
// beforeEach(() => {
//   return testDb.seed.run()
// })
