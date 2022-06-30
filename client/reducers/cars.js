const initialCarState = ['']

const carsReducer = (state = initialCarState, action) => {
  const { type, payload } = action
  //info we're giving to the reducer
  //because action has been destructured, we don't have to explicitly say action.type or action.payload below
  switch (type) {
    case 'ADD_CAR':
      return [...state, payload]
    case 'DEL_CAR':
      return state.filter((car) => car !== payload)
    case 'UPDATE_CAR':
      return state.map((car) => {
        return car === payload.oldCar ? payload.newCar : car
      })

    default:
      return state
  }
}

export default carsReducer
