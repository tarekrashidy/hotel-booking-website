import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../../utils/loading/Loading";
import Hotel from "../../components/hotel/Hotel";
import Footer from "../../utils/footer/Footer";

function List(props) {


  
  return (
    <div className="">

     


      <div className="py-8">

      <h1 className="   bg-gradient-to-r from-emerald-800 to-emerald-300  bg-clip-text p-8 text-center text-5xl font-bold text-transparent">
      Destinations We Love
      </h1>
      <div className="text-center">
      

        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
        Get inspiration for your next trip
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
        Search low prices on hotels, homes and much more...


        </p>
      </div>



      </div>
      <div className="pb-14">
        <div className="xs:grid-cols-1 container mx-auto  grid grid-cols-2 gap-4  px-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {props.isLoading ? (
         <Loading/>
          ) : (
            props.hotels &&
            props.hotels.map((hotel) => (
              <Hotel hotel={hotel} key={hotel.id}/>
          
            ))
          )}
        </div>

 
      </div>
  
    </div>
  );
}

export default List;
