import React from 'react';
import Navigation from './components/navigation';

import {
  createBrowserRouter,
  Outlet,
  Router,
  RouterProvider,
} from "react-router-dom";
import Login from './components/pages/login'
import Home from './components/pages/home'
import Blog from './components/pages/blog'
// import Shop from './components/pages/shop'
import Footer from './components/footer'
import Register from './components/pages/register'
import Single from './components/pages/single'
import "./scss/style.scss"


const navLinks = [
  {
      title: 'Home',
      path: '/'
  },
  {
    title: 'Blog',
    path: '/Blog'
},
  // {
  //     title:'Shop',
  //     path:'/shop'
  // },
  {
      title:'Login',
      path:'/login'
  },
      
]


const Layout = ()=>{
  return(
   <> 
      <Navigation/>
      <Outlet/>
      <Footer/>
   </>
  )
}
const router = createBrowserRouter([
  {
  path: "/",
  element: <Layout/>,
  children: [
    {
      path: "/",
      element:<Home/>
    },
    {
      path: "/post/:id",
      element: <Single/>
    },  
    // {
    //   path: "/shop",
    //   element: <Shop/>
    // },
    
    {
      path: "/blog",
      element: <Blog/>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path:"/login",
      element: <Login/>
    }
  ]
  },


]
);

function App() {
  return (
    <div className="app">
      <div className = "container">
      <RouterProvider router = {router}/>
      </div>
    </div>
  );
}


export default App;
