import React from 'react'
import Header from './Header'
import Car from './Car'
import Card from './Card'

function App() {
  return (
    <>
      <Header />
      <Car />
      <div className="cardContainer">
        <Card />
      </div>
    </>
  )
}

export default App
