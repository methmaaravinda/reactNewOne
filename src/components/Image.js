import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { clickImage } from '../redux/cake/ImageActions'

const Image = () => {
    const id = useSelector(state => state.id)
    const dispatch = useDispatch()
  return (
    <div>
      <h2 id='img1' onClick={ (e) => dispatch(clickImage(e.target.id)) }>1 image </h2>
      <h2 id='img2' onClick={ (e) => dispatch(clickImage(e.target.id)) }>2 image </h2>
      <h2 id='img3' onClick={ (e) => dispatch(clickImage(e.target.id)) }>3 image </h2>
      <h2>{id}</h2>
    </div>
  )
}

export default Image





