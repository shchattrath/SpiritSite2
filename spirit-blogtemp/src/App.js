import React from 'react';
import Navigation from './components/navigation';
import {
  createBrowserRouter,
  Outlet,
  Router,
  RouterProvider,
} from "react-router-dom";
import Login from './components/pages/login'
import Home from './components/home'
import Create from './components/pages/create'
import Contact from './components/pages/contact'
import Shop from './components/pages/shop'
import Footer from './components/footer'
import Register from './components/pages/register'
import Single from './components/pages/single'


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
      title:'Contact',
      path:'/contact'
  },
  {
      title:'Shop',
      path:'/shop'
  },
  {
      title:'Login',
      path:'/login'
  },
  {   title:'Create',
      path: '/create'
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
      path: "/single",
      element: <Single/>
    },
    {
      path: "/create",
      element: <Create/>
    },  
    {
      path: "/shop",
      element: <Shop/>
    },
    {
      path: "/contact",
      element: <Contact/>
    }
  ]
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  }

]
);

function App() {
  return (
    <div>
      
      <RouterProvider router = {router}/>
      
    </div>
  );
}


export default App;
