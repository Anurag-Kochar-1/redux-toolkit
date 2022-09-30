import React from 'react'
import { useDispatch } from "react-redux"
import { login } from '../features/user' 
import { logout } from '../features/user'


function Login() {

  const dispatch = useDispatch()

  return (
    <div>
        <h2>Login Page</h2>


        <button onClick={() => {dispatch(login( {name : "Anurag Kochar", age : 19, email : "test@gmail.com"} ))}} > Login </button>

        <button onClick={() => dispatch(logout())} > Logout </button>
    </div>
  )
}

export default Login