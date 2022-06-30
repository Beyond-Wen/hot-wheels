import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCar } from '../actions'

export default function AddCar() {
  const [carData, setCarData] = useState({
    model_name: '',
    model_image: '',
    cover_image: '',
  })

  const dispatch = useDispatch()

  function handleAdd(e) {
    e.preventDefault()
    dispatch(addCar(carData))
    setCarData('')
  }

  //1. create individual inputs
  //2. create a dropdown thing with name: series_id and value being [id] for each item in teh drop down
  //3. build the object thingy using my example

  // step 3
  // const handleChangeCarObject = (e) => {
  //   let key = e.target.name
  //   let value = e.target.value
  //   let prev = { ...bookData }
  //   prev[key] = value
  //   setBookData(prev)
  // }

  return (
    <>
      <div>
        <form onSubmit={handleAdd}>
          <label htmlFor="newCar">Enter a new car</label>
          <input
            id="newCar"
            type="text"
            name="model_name"
            value={car}
            onChange={(e) => handleChangeCarObject(e.target.value)}
          />
          <input
            id="newCar"
            type="text"
            name="model_name"
            value={car}
            onChange={(e) => handleChangeCarObject(e.target.value)}
          />
          <input type="submit" value="Add" />
        </form>
      </div>
    </>
  )
}

//series, modelName, image
