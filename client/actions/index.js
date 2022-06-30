export const ADD_CAR = 'ADD_CAR'
export const DEL_CAR = 'DEL_CAR'
export const UPDATE_CAR = 'UPDATE_CAR'

export const addCar = (Car) => {
  return {
    type: ADD_CAR,
    payload: Car,
  }
}

export const delCar = (Car) => {
  return {
    type: DEL_CAR,
    payload: Car,
  }
}

export const updateCar = (oldCar, newCar) => {
  return {
    type: UPDATE_CAR,
    payload: { oldCar, newCar },
  }
}

export const fetchCar = () => {}
