const request = require('superagent')
const url = '/api/v1/cars/'

export function getAllCars() {
  return request
    .get(url)
    .then((response) => {
      console.log(response.body)
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
export function deleteCar(id) {
  console.log(id)
  return request
    .del(`${url}deletecar`)
    .send({ id })
    .set('Accept', 'application/json')
    .then((response) => {
      console.log('delete successful')
    })
    .catch((err) => {
      console.log(err)
    })
}
