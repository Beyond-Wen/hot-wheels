import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import Car from './Car'
import Card from './Card'
import AddCar from './AddCar'
import * as actions from '../actions'

function App() {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.cars)

  useEffect(() => {
    dispatch(actions.fetchCars())
  }, [])

  console.log(data)

  // if (loading) {
  //   return <div>Loading...</div>
  // }
  // if (error) {
  //   return <div>Hey! Something went wrong!</div>
  // }

  return (
    <>
      <Header />
      <AddCar />
      <Car />
      <div className="cardContainer">
        <Card />
      </div>
    </>
  )
}

export default App
