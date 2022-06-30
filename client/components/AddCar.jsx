import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCar } from '../actions'

export default function AddCar() {
  const [carData, setCarData] = useState({
    model_name: '',
    model_image: '',
    series_id: '',
    year: '',
  })

  const dispatch = useDispatch()

  function handleAdd(e) {
    e.preventDefault()
    console.log(carData)
    dispatch(addCar(carData))
    setCarData('')
  }

  const handleChangeCarObject = (e) => {
    let key = e.target.name //model_car
    let value = e.target.value //ferrari
    let prev = { ...carData } //added to the object
    prev[key] = value
    setCarData(prev)
  }

  console.log(carData)

  return (
    <>
      <div className="centered">
        <form onSubmit={handleAdd}>
          <label htmlFor="newCar">Add a new car to the collection</label>
          <input
            placeholder="Model Name"
            id="newCar"
            type="text"
            name="model_name"
            value={carData.model_name}
            onChange={(e) => handleChangeCarObject(e)}
          />
          <input
            placeholder="Model Image URL"
            id="newCar"
            type="text"
            name="model_image"
            value={carData.model_image}
            onChange={(e) => handleChangeCarObject(e)}
          />
          <input
            placeholder="Year"
            id="newCar"
            type="text"
            name="year"
            value={carData.year}
            onChange={(e) => handleChangeCarObject(e)}
          />
          <select
            name="series_id"
            value={carData.series_id}
            onChange={(e) => handleChangeCarObject(e)}
          >
            <option value="" disabled>
              --Series Name--
            </option>
            <option name="series_id" value="1">
              Sporty Sportscars
            </option>
            <option name="series_id" value="2">
              Mario and Friends
            </option>
            <option name="series_id" value="3">
              Muscle Cars
            </option>
          </select>
          <input type="submit" value="Add" />
        </form>
      </div>
    </>
  )
}
