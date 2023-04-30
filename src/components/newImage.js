import React from 'react'
import { useSelector, useDispatch} from 'react-redux'


const NewImage = () => {
    const id = useSelector(state => state.id)
  return (
    <div>
      <h1> this is id-- {id} </h1>
    </div>
  )
}

export default NewImage
