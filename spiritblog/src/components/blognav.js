import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';


const navLinks = [
  {
    title: 'Home',
    path: '/'
  },

  // {
  //   title: 'Shop',
  //   path: '/shop'
  // },
  {
    title: 'Blog',
    path: '/blog'
  },
  {
    title: 'Login',
    path: '/login'
  },
  {
    title: 'Create',
    path: '/create'
  }
];

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <ul className="nav-options">
        <li className='filters'>
          <Link className='cat' to = '/blog/fashion'>Fashion</Link>
          <Link className='cat' to = '/blog/development'>Development</Link>
          <Link className='cat' to = '/blog/culture'>Culture</Link>
        </li>
      </ul>
    </nav>
  );
}

