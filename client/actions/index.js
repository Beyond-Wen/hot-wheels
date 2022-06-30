export const SET_CARS = 'SET_CARS'
export const SET_CARS_ERROR = 'SET_CARS_ERROR'
export const SET_CARS_LOADING = 'SET_CARS_LOADING'
import * as api from '../apiClient'

//controls the lifecycle
//if the dispatch says addCar
export const setCars = (cars) => {
  //updates the state (setCar) with the data returned from fetch function below
  return {
    type: SET_CARS,
    payload: cars,
  }
}

export const addCar = (carData) => {
  return (dispatch) => {
    return api.postNewCar(carData).then(() => {
      dispatch(fetchCars())
    })
  }
}

// export const deleteCar = (id) => {
//   return (dispatch) => {
//     return API.deleteCar(id).then(() => {
//       //api call
//       dispatch(fetchCars()) //handles how to re-render your state after the api function is don
//     })
//   }
// }

export const setCarLoading = () => {}

export const fetchCars = () => {
  return (dispatch) => {
    dispatch({ type: SET_CARS_LOADING }) //need to make functions for all of the set car loading/error for each action above (delete/add/set)
    api
      .getAllCars()
      .then((cars) => {
        dispatch(setCars(cars))
      })
      .catch((err) => {
        dispatch({ type: SET_CARS_ERROR, payload: err })
      })
  }
}

//same as above ^
// const [cars, setCars] = useState([])
// const [loading, setLoading] = useState(false)
// const [error, setError] = useState(null)

// useEffect(() => {
//   setLoading(true)
//   API.getAllCars()
//     .then((cars) => {
//       setCars(cars)
//     })
//     .catch((err) => {
//       setError(err)
//     })
//     .finally(() => {
//       setLoading(false)
//     })
// }, [])

export const fetchCar = () => {}
