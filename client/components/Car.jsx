import React from 'react'
import { useDispatch } from 'react-redux'
import { updateCar, delCar } from '../actions'

export default function Car(props) {
  const car = props.name
  const dispatch = useDispatch()

  function handleDel() {
    dispatch(delCar(car))
  }

  function handleUpdate() {
    dispatch(updateCar(car))
  }

  return (
    <>
      <div>
        {car}
        <div>
          <button onClick={() => handleUpdate()}>Update</button>
        </div>
        <div>
          <button onClick={() => handleDel()}>Delete</button>
        </div>
      </div>
    </>
  )
}
