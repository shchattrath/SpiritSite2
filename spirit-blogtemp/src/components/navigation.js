import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';


const navLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'Blog',
    path: '/blog'
  },
  {
    title: 'Contact',
    path: '/contact'
  },
  {
    title: 'Shop',
    path: '/shop'
  },
  {
    title: 'Create',
    path: '/create'
  },
  {
    title: 'Login',
    path: '/login'
  }
];

export default function Navigation() {
  return (
    <nav className="site-navigation">
      <span className="site-title">SPIRIT</span>
      <ul className="nav-options">
        {navLinks.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}