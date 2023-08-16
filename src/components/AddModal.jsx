import React, { useState } from 'react'

const AddModal = ({setmovies,movies,setshowAdd}) => {
  const [newmovie, setnewmovie] = useState({
      name:"",
      genre:"",
      image:"",
      description:"",
      rate:3,
  })
  const addmovie=()=>setmovies([...movies,newmovie])
  return (
    <div className='bigmodal'>
<div className="modal">
<button onClick={()=>setshowAdd(false)} >x</button>
        <input type="text" onChange={(e)=>setnewmovie({...newmovie,name:e.target.value})} placeholder='name' name="" id="" />
        <input type="text" onChange={(e)=>setnewmovie({...newmovie,genre:e.target.value})} placeholder='genre' name="" id="" />
        <input type="text" onChange={(e)=>setnewmovie({...newmovie,description:e.target.value})} placeholder='description' name="" id="" />
        <input type="text" onChange={(e)=>setnewmovie({...newmovie,image:e.target.value})} placeholder='image' name="" id="" />
        <button onClick={()=>{setshowAdd(false);addmovie()}}>Add</button>
</div>
        

      
    </div>
  )
}

export default AddModal
