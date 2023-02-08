import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "./utils/nav/Navbar"
import Footer from "./utils/footer/Footer"
import Home from "./views/home/Home"
import Details from "./components/details/Details";
import Booked from "./components/booked/Booked";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { db } from '../firebase-config';
import { collection, getDocs } from "firebase/firestore";
import ProtectedRoute from "./utils/ProtectedRoute/ProtectedRoute";
import Landing from "./views/landing/Landing";
import Layout from "./views/layout/Layout";

function App() {
  const [users, setUsers] = useState([])
  const CollectionReference = collection(db, 'users');
  const getUsers = async () => {
    const data = await getDocs(CollectionReference);
    setUsers(data.docs.map((doc) => ({ ...doc.data() })))
    console.log(data, "users", users);

  }
  useEffect(() => {
    getUsers()

  }, [])







  return (
    <>
      <div>
        <div className="h-screen  flex flex-col ">

          <Landing />


        </div>
      </div>




    </>
  );
}

export default App;
