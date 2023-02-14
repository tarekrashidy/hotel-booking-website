import React, { useState, useEffect, Fragment } from 'react'
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { getcart,deletehotel } from "./../../store/cartSlice";

import { Link } from "react-router-dom";
import Navbar from '../../utils/nav/Navbar';
const Booked = () => {
  
    const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getcart());

  }, []);
  return (
    <Fragment>
      <Navbar/>
    <div className='container mx-auto'>
       <h1 className=" pt-4  bg-gradient-to-r from-emerald-800 to-emerald-300  bg-clip-text pb-8 text-center text-4xl font-extrabold text-transparent">
your Bookings      </h1>
      <ul className="list-group p-8 flex gap-2 flex-col">
      { cart? cart.map((hotel) => (
      <li
        className=" items-center shadow-md rounded   bg-Slate-200 flex flex-row justify-center gap-6 py-3 px-2"
        key={hotel.id}
      >
        <div className=" text-xl basis-1/2 ">{hotel.name}</div>
        <div className="avatar basis-1/4">
          <div className="w-24 rounded">
            <img src={hotel.hotelImg} />
          </div>
        </div>
        <div className="btn-group basis-1/4 justify-end " role="group">
          
          <button
            className="btn  btn-warning"
            type="button"
            onClick={() =>
              dispatch(deletehotel(hotel))
                .unwrap()
               
            }
          >
            Cancel
          </button>
        </div>
      </li>
    ))
          : "there is no  hotels "}
        </ul>
    </div>
    </Fragment>
  )
}

export default Booked