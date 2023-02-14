import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "swiper/css/bundle";
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./views/home/Home"
import Details from "./components/details/Details";
import Booked from "./components/booked/Booked";
import Login  from "./components/login/Login";
import Signup from "./components/signup/Signup";
import ProtectedRoute from './utils/ProtectedRoute/ProtectedRoute';
import { Suspense } from "react";

import { Provider } from "react-redux";
// @ts-ignore
import store from './store'
import Layout from './views/layout/Layout';
import Notfound from './utils/404/Notfound';
// @ts-ignore
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Notfound />,
  },
  {
    path: "/home",
    element: <Suspense><ProtectedRoute><Home /></ProtectedRoute></Suspense>,
    errorElement: <Notfound />,
    
  },
  {
    path: "/details/:id",
    element:
      <Suspense >
        <ProtectedRoute>
           <Details />
        </ProtectedRoute>
      </Suspense>


  },
  {
    path: "/booked",
    element:
      <ProtectedRoute>
        <Booked />
      </ProtectedRoute>
  },
  
  {
    path: "/Login",
    element:
   
        <Login />
 
  },
  {
    path: "/signup",
    element:

        <Signup />
    
  },
  // {
  //   path: "/login",
  //   element: token ? <Navigate to={'/'}/>:  <Login />,
  // },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>

    <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
