import React, { useState } from 'react'
import CardModal from './CardModal'

const MoviesCard = ({el}) => {
    const [show, setshow] = useState(false)
  return (
    <div className='card'>
        {show?<CardModal setshow={setshow} els={el}/>:null}
      <img onClick={()=>setshow(true)} src={el.image} alt="" />
    </div>
  )
}

export default MoviesCard
