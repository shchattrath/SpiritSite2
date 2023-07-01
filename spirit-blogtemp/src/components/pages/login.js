import React from 'react'

const Login = () => {
    return(
        <div className = 'auth'>
            
            <h1>Login</h1>
            <form>
                <input type = "text" placeholder ='usernanme'/>
                <input type = "text" placeholder ='password'/>
                <button>login</button>
            </form>
            
        </div>
    )
}

export default Login