
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './context/authContext';


export default function Navigation() {
  const { currentUser, logout } = useContext(AuthContext);

  return (
    <nav className="site-navigation">
      <Link className='link' to = "">
      <span className="site-title">SPIRIT</span>
      </Link>
      <ul className="nav-options">
        <li>
          <Link to="/">Home</Link>
        </li>
        {/* Commented out shop link */}
        {/* <li>
          <Link to="/shop">Shop</Link>
        </li> */}
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/create">Create</Link>
        </li>
        <li>{currentUser?.username}</li>
        {currentUser ? <li className='clickable' onClick ={logout} > Logout</li> : <Link to = "login">Login</Link>}
      </ul>
    </nav>
  );
}