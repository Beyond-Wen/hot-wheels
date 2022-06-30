import React from 'react'
import Header from './Header'
import Car from './Car'
import Card from './Card'
import AddCar from './AddCar'

function App() {
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
