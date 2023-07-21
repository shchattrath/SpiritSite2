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
import Create from './components/pages/create'
import Fashion from './components/pages/fashion'
import Development from './components/pages/development'
import Culture from './components/pages/culture'
import BlogNav from './components/blognav'
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
  {
    title: 'Create',
    path: '/create'
  },
  // {
  //     title:'Shop',
  //     path:'/shop'
  // },
  {
      title:'Login',
      path:'/login'
  },
  {
    title: 'Development',
    path: '/blog/development'
  },  
  {
    title: 'Culture',
    path: '/blog/culture'
  },  
  {
    title: 'Fashion',
    path: '/blog/fashion'
  }
      
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
      element: <div>
                  <BlogNav/>
                  <Blog/>
                </div>
    },
    {
      path: "/register",
      element: <Register/>
    },
    {
      path:"/login",
      element: <Login/>
    },
    
    {
      path:"/Create",
      element: <Create/>
    },
    
    {
      path:"/blog/fashion",
      element: <div>
                  <BlogNav/>
                  <Fashion/>
                </div>
    },
    
    {
      path:"/blog/development",
      element: <div>
                  <BlogNav/>
                  <Development/>
                </div>
    },
    
    {
      path:"/blog/culture",
      element: <div>
                  <BlogNav/>
                  <Culture/>
                </div>
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
