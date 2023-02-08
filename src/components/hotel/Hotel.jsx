import React, { useRef, useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import Modal from "../../utils/modal/Modal";

const Hotel = ({ hotel }) => {


  function starRating(score) {
    const stars = useMemo(() => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <=  Math.round(score)? <input  name="rating-2" className="mask mask-star-2 border-0 bg-orange-400" /> :<input  name="rating-2" className="mask mask-star-2 border-0 bg-gray-400" /> );
    }   
    return stars;
  }, [score]);
  return stars.map((el,i) => <span key={i} >{el}</span>);
}
  return (
       <div className="w-50 card bg-base-100 shadow-2xl" key={hotel.id}>
            <Modal hotel={hotel} />
            <Link className="show_details" to={`/Details/${hotel.id}`}>

                <figure>
                  <img
                    src={`${hotel.hotelImg}`}
                    alt="hotel"
                    className=" rounded-t-xl"
                  />
        </figure>
        </Link>
                <div className="card-body p-2 sm:p-2 md:p-6  lg:p-8 xl:p-10 ">
                  <h2 className="card-title ">{hotel.name}</h2>

                  <div className="card-actions   items-center">
                    
                    <div className="badge  border-0 bg-emerald-500">
                      {hotel.brand}{" "}
                    </div>
                  
                    <Link className="show_details text-yellow-400" to={`/Details/${hotel.id}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
</svg>
          </Link>


                    <div className="">
                      <p> {hotel.totalReviewCount} Reviews</p>

           
          </div>
          <div className="avatar">
  <div className="w-8 rounded-full">
    <img src={`${hotel.flag}`} alt="Tailwind-CSS-Avatar-component" />
  </div>
</div>
         
          <div className="rating">
          {
            starRating(   hotel.starRating)
            }
            
           
            

</div>
                  </div>
            </div>
            <label htmlFor={hotel.id} className="btn  border-0 bg-gradient-to-r from-emerald-700 to-emerald-500 m-4">Book Now</label>

              </div>
  )
}

export default Hotel