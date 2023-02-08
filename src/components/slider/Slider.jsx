import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./slider.css";
// import required modules
import { Parallax, Pagination, Navigation } from "swiper";
import { Link } from "react-router-dom";
import {useQuery } from 'react-query'
import {getData} from '../../store/data_provider'
export default function Slider(props ) {
  // const { isLoading, error, data: hotels } = useQuery('slideData', getData);

  return (
    <>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        speed={600}
        loop={true}
        parallax={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Parallax, Pagination, Navigation]}
        className="mySwiper mb-6 "
      >
        <div
          slot="container-start"
          className="parallax-bg"
          data-swiper-parallax="-23%"
        ></div>

        {props.hotels? props.hotels.map((hotel) => (
              <SwiperSlide key={hotel.id}
                style={{
                  backgroundImage: `url(${hotel.cover})`,
                  "backgroundRepeat": "no-repeat",
                  "backgroundSize": "cover",
                  "backgroundPosition": " center",
                }}
            >
                <div
                  className="title font-bold text-white-500 "
                  data-swiper-parallax="-300"
                >
                  {hotel.name}
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  {hotel.brand}
                </div>
                <div className="text" data-swiper-parallax="-100">
                <p> Rating : {hotel.overallGuestRating}</p>
                </div>
                <div className="button" data-swiper-parallax="-100">
                  <Link className="show_details" to={`/Details/${hotel.id}`}>
                    <button className="btn  border-0 bg-emerald-600">
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
                    </button>
                  </Link>
                </div>
              </SwiperSlide>
            ))
          : "no data"}
      </Swiper>
    </>


    
    
    
  );
}
