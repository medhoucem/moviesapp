import React, { useState } from 'react'
import AddModal from './AddModal'
import {useNavigate} from 'react-router-dom';


const Navbar = ({setmovies,movies,setsearch}) => {
  const [showAdd, setshowAdd] = useState(false)
  const navigate= useNavigate()

  return (
    <div className='navbar'>
      {showAdd?<AddModal setmovies={setmovies} movies={movies} setshowAdd={setshowAdd} />:null}
        <nav>
            <h2>MOVIE APP</h2>
           <div className='navbar2'> <input onChange={(e)=>setsearch(e.target.value)} type="search" placeholder='search' />
            <button onClick={()=>setshowAdd(true)} >Add</button>
            <button onClick={()=>navigate("/")}>LOGOUT</button></div>
        </nav>

      
    </div>
  )
}

export default Navbar
