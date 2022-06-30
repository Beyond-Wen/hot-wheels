import React from 'react'
import { useDispatch } from 'react-redux'
import { updateCar, delCar } from '../actions'

export default function Card(props) {
  console.log(props)
  const dispatch = useDispatch()

  function handleDel() {
    dispatch(delCar())
  }

  return (
    <>
      <div className="cardDiv">
        <div className="right">
          {props.carInfo.year} : {props.carInfo.series_name}
        </div>
        <div>
          <img
            className="smallerPic"
            src="./images/bestlogo.png"
            alt="hot wheels logo"
          />{' '}
        </div>

        <div>
          <img
            className="smallerCar"
            src={props.carInfo.model_image}
            alt="a hot wheels car"
          />
        </div>
        <div className="modelName">{props.carInfo.model_name}</div>
        {/* put it here */}
        {/* <button onClick={() => handleDel()}>Delete</button> */}
      </div>
    </>
  )
}
