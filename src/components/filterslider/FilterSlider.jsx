import React, { useRef, useState, useEffect, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import "./filterslider.css";
import { useDispatch, useSelector } from "react-redux";
import "swiper/css";
import "swiper/css/pagination";
import { useQuery } from "react-query";
import { Pagination } from "swiper";
import Loading from "../../utils/loading/Loading";
import { Navigation } from "swiper";
import Notfound from "../../utils/404/Notfound";

export default function FilterSlider({ hotels, isLoading }) {
  const [pageType, setPageType] = useState("Hilton");
  function starRating(score) {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <=  Math.round(score)? <input key={i}  name="rating-2" className="mask mask-star-2 border-0 bg-orange-400" /> :<input  key={i} name="rating-2" className="mask mask-star-2 border-0 bg-gray-400" /> );
    }   
    return stars;
  return stars.map((el,i) => <span key={i} >{el}</span>);
}
  return (
    <>
      <div className="text-center py-4">
        <span className="bg-gradient-to-r from-emerald-800 to-emerald-300 bg-clip-text py-3  text-center text-4xl font-bold text-transparent">
          <span className=" bg-gradient-to-r from-yellow-700 to-yellow-300 bg-clip-text py-3  text-center text-4xl font-bold text-transparent">
            Mars
          </span>{" "}
          Booking{" "}
        </span>

        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl">
          Find your next stay
        </h1>
        <p className="mb-6 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
          A monthly stay is perfect for working remotely, reuniting with family
          and friends, or just exploring the world again. More properties are
          opening for monthly stays on Booking.com every day, so it’s now easier
          than ever to get away for a while.
        </p>
      </div>

      <h5 className="bg-gradient-to-r from-emerald-800  to-emerald-300 bg-clip-text py-3 text-center text-2xl font-bold text-transparent">
        Filter by Hotel Brand
      </h5>

      <div className=" filter-wrapper flex flex-row flex-wrap justify-center   py-5">
        {" "}
        <div className="basis-1  px-5 py-2 	">
          <button
            className="btn rounded-full border-2 border-emerald-600 bg-base-100 text-black shadow-sm"
            onClick={(e) => {
              setPageType(e.target.innerHTML);
            }}
          >
            Hilton
          </button>
        </div>
        <div className="basis-1 px-5 py-2 ">
          <button
            className="btn rounded-full border-2 border-emerald-600 bg-base-100 text-black shadow-sm "
            onClick={(e) => {
              setPageType(e.target.innerHTML);
            }}
          >
            Intercontinental
          </button>
        </div>
        <div className="basis-1 px-5 py-2">
          <button
            className="btn rounded-full border-2 border-emerald-600 bg-base-100 text-black shadow-sm "
            onClick={(e) => {
              setPageType(e.target.innerHTML);
            }}
          >
            Marriott
          </button>
        </div>
        <div className="basis-1 px-5 py-2">
          <button
            className="btn rounded-full border-2 border-emerald-600 bg-base-100 text-black shadow-sm"
            onClick={(e) => {
              setPageType(e.target.innerHTML);
            }}
          >
            Hyatt
          </button>
        </div>
        <div className="basis-1 px-5 py-2">
          <button
            className="btn rounded-full border-2 border-emerald-600 bg-base-100 text-black shadow-sm"
            onClick={(e) => {
              setPageType(e.target.innerHTML);
            }}
          >
            Independent
          </button>
        </div>
        <div className="basis-1 px-5 py-2">
          <button
            className="btn rounded-full border-2 border-emerald-600 bg-base-100 text-black shadow-sm"
            onClick={(e) => {
              setPageType(e.target.innerHTML);
            }}
          >
            Fairmont
          </button>
        </div>
      </div>

      <div className="container mx-auto">
        <Swiper 
         
          slidesPerView={2}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          navigation={true} modules={[Navigation]}        
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="FilterSlider"
        >
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {hotels
                ? hotels
                    .filter((hotel) => hotel.brand.includes(pageType))
                    .map((hotel,i) => (
                      <SwiperSlide
                        className="shadow-xl transition-all duration-300 rounded-lg  "
                        key={i}
                        style={{
                          backgroundImage: `url(${hotel.hotelImg})`,
                          backgroundRepeat: "no-repeat",
                          backgroundSize: "cover",
                          backgroundPosition: " center",
                        }}
                      >
                        <div className="backdrop-blur-sm">
                          <h2 className="text-3xl text-center font-bold text-transparent text-white text-red-50 drop-shadow-lg shadow-black">
                  
                            {hotel.name}
                          </h2>
                          <div
                            className=" flex items-center
    justify-center"
                          >
                            <Link
                              className="show_details text-green-400 text-2xl

                              "
                              to={`/details/${hotel.id}`}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="h-6 w-6"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                                />
                              </svg>
                            </Link>


                          </div>
                          <div className="rating">
          {
            starRating(   hotel.starRating)
            }
            
           
            

</div>
                        </div>
                      </SwiperSlide>
                    ))
                : <Notfound/>}
            </>
          )}
        </Swiper>
      </div>
    </>
  );
}
