import React from 'react'
import { useDispatch } from 'react-redux'
import { updateCar, delCar } from '../actions'

export default function Car(props) {
  const car = props.item
  const dispatch = useDispatch()

  function handleDel() {
    dispatch(delCar(car))
  }

  // function handleUpdate() {
  //   dispatch(updateCar(car))
  // }

  return (
    <>
      {car}
      <button onClick={() => handleDel()}>Delete</button>
    </>
  )
}
