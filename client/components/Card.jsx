import React from 'react'
import { useDispatch } from 'react-redux'
import { updateCar, delCar } from '../actions'

export default function Card() {
  const dispatch = useDispatch()

  function handleDel() {
    dispatch(delCar())
  }

  return (
    <>
      <div className="cardDiv">
        <div> year and series from form or db</div>
        <div>
          <img src="" alt="" /> car image from form or db
        </div>
        <div> model name from form or db</div>
        {/* put it here */}
        <button onClick={() => handleDel()}>Delete</button>
      </div>
    </>
  )
}
