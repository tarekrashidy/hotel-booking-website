import React, { Fragment, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { gethotel } from "./../../store/hotelSlice";
import Loading from "../../utils/loading/Loading";

import "./details.css";
import Navbar from "../../utils/nav/Navbar";
const Details = () => {
  const [page, setpage] = useState(1);
  const [hotelpopular, sethotelpopular] = useState("popular");
  const dispatch = useDispatch();
  let { id } = useParams();
  useEffect(() => {
    dispatch(gethotel(id))
      .unwrap()
  }, [id]);
  const { isLoading, hotels, hotelInfo } = useSelector((state) => state.hotels);

  const history = useNavigate();
  const handelClick = () => {
    history("/");
  };

  return (
<Fragment>
<Navbar/>
<div className="hotel-details mx-auto  min-h-screen">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {hotelInfo && (
            <>
              <div
                className="hero min-h-screen"
                style={{
                  backgroundImage: `url(${hotelInfo.cover})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: " center",
                }}
                key={hotelInfo.id}
              >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex-col text-neutral-content lg:flex-row backdrop-blur-sm">
                  <div className="basis-1/2">
                    <div className="carousel w-full">
                      <div
                        id="slide1"
                        className="carousel-item relative w-full"
                      >
                        <img
                          src={`${hotelInfo.hotelImg}`}
                          className="w-full rounded-lg shadow-2xl"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                          <a href="#slide4" className="btn btn-circle">
                            ❮
                          </a>
                          <a href="#slide2" className="btn btn-circle">
                            ❯
                          </a>
                        </div>
                      </div>
                      <div
                        id="slide2"
                        className="carousel-item relative w-full"
                      >
                        <img
                          src={`${hotelInfo.hotelImg2}`}
                          className="w-full rounded-lg shadow-2xl"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                          <a href="#slide1" className="btn btn-circle">
                            ❮
                          </a>
                          <a href="#slide3" className="btn btn-circle">
                            ❯
                          </a>
                        </div>
                      </div>
                      <div
                        id="slide3"
                        className="carousel-item relative w-full"
                      >
                        <img
                          src={`${hotelInfo.hotelImg3}`}
                          className="w-full rounded-lg shadow-2xl"
                        />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                          <a href="#slide2" className="btn btn-circle">
                            ❮
                          </a>
                          <a href="#slide4" className="btn btn-circle">
                            ❯
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="basis-1/2 ">
                    <div>
                      <h1 className="text-5xl font-bold">{hotelInfo.name}</h1>
                      <h1 className="text-3xl font-bold ">{hotelInfo.brand}</h1>

                      <p className="py-6"> {hotelInfo.des}</p>

                      <div className="flex flex-col  justify-center px-2">
                        <div className="stat-value text-2xl">
                          Rank :{hotelInfo.displayRank}
                        </div>
                        <div className="stat-value text-2xl">
                          Guest Rating : {hotelInfo.overallGuestRating}
                        </div>
                        <div className="stat-value text-2xl">
                          star Rating : {hotelInfo.starRating}
                        </div>
                        <div className="stat-value flex text-2xl">
                          <div>{hotelInfo.address}</div>

                          <div className="avatar px-1">
                            <div className="w-8 rounded-full">
                              <img
                                src={`${hotelInfo.flag}`}
                                alt="Tailwind-CSS-Avatar-component"
                              />
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-center gap-1 py-5">
                        {" "}
                        <button
                          className="btn border-0 bg-gray-600 text-white "
                          onClick={handelClick}
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
                              d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </>
          )}
        </>
      )}
    </div> 


</Fragment>


  );
};

export default Details;
