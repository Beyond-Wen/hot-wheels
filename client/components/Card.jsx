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
        <div className="right"> year + series</div>
        <div>
          <img className="smallerPic" src="./images/bestlogo.png" alt="" />{' '}
        </div>

        <div>
          <img className="smallerCar" src="./images/model3.png" alt="" />
        </div>
        <div className="modelName"> model name</div>
        {/* put it here */}
        {/* <button onClick={() => handleDel()}>Delete</button> */}
      </div>
    </>
  )
}
