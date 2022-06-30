import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from './Header'
import Card from './Card'
import AddCar from './AddCar'
import * as actions from '../actions'

function App() {
  const dispatch = useDispatch()
  const { data, loading, error } = useSelector((state) => state.cars)

  useEffect(() => {
    dispatch(actions.fetchCars())
  }, [])

  const carCard = data.map((car, id) => {
    return <Card key={id} carInfo={car} />
  })

  // if (loading) {
  //   return <div>Loading...</div>
  // }
  // if (error) {
  //   return <div>Hey! Something went wrong!</div>
  // }

  return (
    <>
      <Header />
      <br />
      <br />
      <AddCar />
      <br />
      <br />
      <div className="cardContainer">{carCard}</div>
    </>
  )
}

export default App
