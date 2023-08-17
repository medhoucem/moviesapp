import React from 'react'
import {Link} from 'react-router-dom';


const Login = () => {
 
  return (
    <div className='login'>
     <div className='log-box'> 
        <h1>LOGIN PAGE</h1>
      <input type="text" placeholder='email'/>
      <input type="password" placeholder='passwrod'/>
     <Link to={"/home"}> <button>login</button></Link>
      </div>
    </div>
  )
}

export default Login
