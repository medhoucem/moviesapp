import React, { useState } from 'react'
import AddModal from './AddModal'

const Navbar = ({setmovies,movies,setsearch}) => {
  const [showAdd, setshowAdd] = useState(false)
  return (
    <div className='navbar'>
      {showAdd?<AddModal setmovies={setmovies} movies={movies} setshowAdd={setshowAdd} />:null}
        <nav>
            <h2>MOVIE APP</h2>
            <input onChange={(e)=>setsearch(e.target.value)} type="search" placeholder='search' />
            <button onClick={()=>setshowAdd(true)} >Add</button>
        </nav>

      
    </div>
  )
}

export default Navbar
