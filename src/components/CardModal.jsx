import React from 'react'

const CardModal = ({els,setshow}) => {
  return (
    <div className='bigmodal'>
        <div className='modal'>
            <button onClick={()=>setshow(false)}>x</button>
            <h2> {els.name}</h2>
            <h3> {els.genre}</h3>
            <p>{els.description}</p>
        </div>
      
    </div>
  )
}

export default CardModal
