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

export function postNewCar(data) {
  return request
    .post(`${url}addcar`)
    .send(data)
    .set('Accept', 'application/json')
    .then((response) => {
      console.log('yay got ' + JSON.stringify(response.body))
    })
    .catch((err) => {
      console.log(err)
    })
}

//post function
