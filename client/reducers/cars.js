//reducer file

import { SET_CARS, SET_CARS_ERROR, SET_CARS_LOADING } from '../actions'

const initialCarState = {
  data: [],
  error: null,
  loading: false,
}
const carsReducer = (state = initialCarState, action) => {
  const { type, payload } = action

  //type= ADD_CAR
  //payload = the data being sent through
  //action is defined in the switch statement (eg. )

  //info we're giving to the reducer
  //because action has been destructured, we don't have to explicitly say action.type or action.payload below
  switch (type) {
    case SET_CARS:
      return {
        ...state,
        data: payload,
        error: null,
        loading: false,
      }
    case SET_CARS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      }
    case SET_CARS_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      }

    default:
      return state
  }
}

export default carsReducer
