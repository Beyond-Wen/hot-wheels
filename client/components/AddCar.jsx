import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCar } from '../actions'

export default function AddCar() {
  const [car, setCar] = useState('')
  const dispatch = useDispatch()

  function handleAdd(e) {
    e.preventDefault()
    dispatch(addCar(car))
    setCar('')
  }

  return (
    <>
      <div>
        <form onSubmit={handleAdd}>
          <label htmlFor="newCar">Enter a new car</label>
          <input
            id="newCar"
            type="text"
            name="car"
            value={car}
            onChange={(e) => setCar(e.target.value)}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    </>
  )
}
