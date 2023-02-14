import React, { useEffect, useState } from "react";
import { signOut } from "firebase/auth";

import Slider from "../../components/slider/Slider";
import FilterSlider from "../../components/filterslider/FilterSlider";
import List from "../../views/list/List";
import { useDispatch, useSelector } from "react-redux";

import { gethotels, gethotel } from "../../store/hotelSlice";
import { useQuery } from "react-query";
import { getData } from "../../store/data_provider";
// @ts-ignore
import { modalState } from "./../../store/modalSlice";
import Alert from "../../utils/alert/Alert";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase-config";

import { useNavigate } from "react-router-dom";
import Footer from "../../utils/footer/Footer";
import Navbar from "../../utils/nav/Navbar";
import Layout from "../layout/Layout";

const Home = () => {
  // const { isLoading, error, data: hotelsList } = useQuery('hotelsList', getData)
  const [alert, setAlert] = useState(false);
  const { isOpen } = useSelector((state) => state.modalAlert || {});
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(gethotels());
  }, [dispatch]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // ...
        console.log("uid", uid);
      } else {
        // User is signed out
        // ...
        console.log("user is logged out");
      }
    });
  }, []);
  const navigate = useNavigate();


  const { hotels, error, isLoading } = useSelector((state) => state.hotels);

  return (
    <>
      <Layout>
        {isOpen ? <Alert /> : ""}
      
        <Slider hotels={hotels} isLoading={isLoading} error={error} />
        <FilterSlider hotels={hotels} isLoading={isLoading} error={error} />
        <List hotels={hotels} isLoading={isLoading} error={error} />
      </Layout>
    </>
  );
};

export default Home;
