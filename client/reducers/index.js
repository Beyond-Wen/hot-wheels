import { combineReducers } from 'redux'

import carsReducer from './cars'

const reducer = combineReducers({
  cars: carsReducer,
})

export default combineReducers({
  // stuff
})
