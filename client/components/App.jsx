import React, { useEffect } from 'react'
import Header from './Header'
import Car from './Car'
import Card from './Card'
import AddCar from './AddCar'
import * as api from '../apiClient'

function App() {
  useEffect(() => {
    api
      .getAllCars()
      .then((carData) => {
        console.log(carData)
        return null
      })
      .catch((err) => {
        console.log(err)
      })
  })

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
