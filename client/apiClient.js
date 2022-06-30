const request = require('superagent')
const url = '/api/v1/cars/'

export function getAllCars() {
  return request
    .get(url)
    .then((response) => {
      const cars = response.body
      return cars
    })
    .catch((err) => {
      console.log(err)
    })
}

//post function
