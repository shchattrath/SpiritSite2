import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'

const Register = () => {
    const [inputs,setInputs] = useState({
        email:"",
        username:"",
        password:"", 
    }) 

    const [err, setError] = useState(null)

    const navigate = useNavigate()

    const handleChange = e =>{
        setInputs(prev =>({...prev, [e.target.name]: e.target.value}))
    }
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await axios.post("/auth/register", inputs);
            navigate ("/login")
        } catch (err) {
            setError(err.response.data)
        }
    }

    console.log(inputs)

    return(
        <div className = 'auth'>
            
            <h1>Register</h1>
            <form>
                <input  name = 'email' className='textbox' type = "text" placeholder = 'email' onChange = {handleChange}/>
                <input  name = 'username' className='textbox' type = "text" placeholder ='username' onChange = {handleChange}/>
                <input  name = 'password' className='textbox' type = "text" placeholder ='password' onChange = {handleChange}/>
                {err && <p>{err}</p>}
                <button className='textbox' onClick = {handleSubmit} >Register</button>
                <span><Link className='link' to="/login">Already have an account?</Link> </span>
            </form>
            
        </div>
    )
}

export default Register