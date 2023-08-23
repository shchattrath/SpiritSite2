import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useState, useEffect, useContext} from 'react'
import axios from 'axios'
import { AuthContext, AuthContextProvider} from '../context/authContext'

const Login = () => {
    const [inputs,setInputs] = useState({
        username:"",
        password:"", 
    }) 

    const [err, setError] = useState(null)

    const navigate = useNavigate()

    const {login} = useContext(AuthContext);
    console.log(login);
    const handleChange = e =>{
        setInputs(prev =>({...prev, [e.target.name]: e.target.value}))
    }
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            await login(inputs)
            await axios.post("/auth/login", inputs);
            navigate ("/")
        } catch (err) {
            setError(err.response.data)
        }
    }
    return(
        <div className = 'auth'>
            
            <h1>Login</h1>
            <form>
                <input className='textbox' type = "text" placeholder ='username' name = 'username' onChange = {handleChange}/>
                <input className='textbox' type = "text" placeholder ='password' name = 'password' onChange={handleChange}/>
                {err && <p>{err}</p>}
                <button onClick={handleSubmit} className='textbox' >login</button>
                <span><Link className='link' to="/register">Register Here</Link> </span>
            </form>
            
        </div>
    )
}

export default Login