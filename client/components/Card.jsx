import React from 'react'
import { useDispatch } from 'react-redux'
import { delCar } from '../actions/index'

export default function Card(props) {
  // console.log('props are here', props)
  const dispatch = useDispatch()

  function handleDel(e, id) {
    e.preventDefault()
    // console.log('id', id)
    dispatch(delCar(id))
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
          <button onClick={(e) => handleDel(e, props.carInfo.car_id)}>
            Delete
          </button>
        </div>
        <div className="modelName">{props.carInfo.model_name}</div>
        {/* put it here */}
      </div>
    </>
  )
}
