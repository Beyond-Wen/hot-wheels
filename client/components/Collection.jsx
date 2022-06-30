import React from 'react'
import { useSelector } from 'react-redux'
import Car from './Car'

export default function Collection() {
  const cars = useSelector((state) => state.cars)

  return (
    <div>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>
            {car}
            <Car item={car} />
          </li>
        ))}
      </ul>
    </div>
  )
}
