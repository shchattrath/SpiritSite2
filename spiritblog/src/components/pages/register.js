import React from 'react'
import { Link } from 'react-router-dom'
import {useState} from 'react'

const Register = () => {
    const [inputs,setInputs] = useState({
        email:"",
        username:"",
        password:"", 
    }) 

    const handleChange = e =>{
        setInputs(prev =>({...prev, [e.target.name]: e.target.value}))
    }

    console.log(inputs)

    return(
        <div className = 'auth'>
            
            <h1>Register</h1>
            <form>
                <input  name = 'username' className='textbox' type = "text" placeholder ='username' onChange = {handleChange}/>
                <input  name = 'email' className='textbox' type = "text" placeholder = 'email' onChange = {handleChange}/>
                <input  name = 'password' className='textbox' type = "text" placeholder ='password' onChange = {handleChange}/>
                <p>An error has occurred, please try again.</p>
                <button className='textbox' >Register</button>
                <span><Link className='link' to="/login">Already have an account?</Link> </span>
            </form>
            
        </div>
    )
}

export default Register