import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return(
        <div className = 'auth'>
            
            <h1>Login</h1>
            <form>
                <input type = "text" placeholder ='username'/>
                <input type = "text" placeholder ='password'/>
                <p>An error has occurred, please try again.</p>
                <button>login</button>
                <span><Link className='link' to="/register">Register Here</Link> </span>
            </form>
            
        </div>
    )
}

export default Login