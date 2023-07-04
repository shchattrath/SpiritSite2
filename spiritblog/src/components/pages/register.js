import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return(
        <div className = 'auth'>
            
            <h1>Register</h1>
            <form>
                <input  className='textbox' type = "text" placeholder ='username'/>
                <input  className='textbox' type = "text" placeholder = 'email'/>
                <input  className='textbox' type = "text" placeholder ='password'/>
                <p>An error has occurred, please try again.</p>
                <button className='textbox' >Register</button>
                <span><Link className='link' to="/login">Already have an account?</Link> </span>
            </form>
            
        </div>
    )
}

export default Register