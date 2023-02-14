import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase-config';
import California from '../../assets/images/city/California.jpg'
import { useForm } from "react-hook-form";

const Signup = () => {
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        getValues,
    } = useForm();

    const onSubmit = async (data) => {

      

        await createUserWithEmailAndPassword(auth, data.email, data.password, data.username)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/login")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);

               
            });


    }



  

    return (
        <main className='container mx-auto login_container' >
            <section className='mx-auto flex flex-col xs:flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row  border-gray-100 gap-2 border-2 p-6 rounded-md shadow-lg '>
                <div className=' basis-1/2 mx-auto border-gray-100 flex column items-center justify-center '>
                    <div>
                        <h3 className='text-xl text-bold py-3 text-center'> Mars.Booking </h3>
                        <h3 className='text-2xl font-semibold py-4 text-center'> Sign up</h3>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className=" xl:w-96 lg:w-80 md:w-72 mx-auto"
                        >
                            <div className=" Username mb-3">
                                <input
                                    type="text"
                                    placeholder="Username"
                             
                                    className="input-bordered input w-full border-gray-200 "
                                    {...register("Username", {
                                        required: "This is required.",
                                        maxLength: 15,
                                        minLength: 5,
                                        pattern: /^[A-Za-z][A-Za-z0-9_]{7,29}$/,
                                    })}
                                />{" "}
                            </div>

                            {errors.Username?.type === "required" && (
                                <p className="text-rose-600" role="alert">
                                    User name is required
                                </p>
                            )}
                            {errors.Username?.type === "minLength" && (
                                <p className="text-rose-600" role="alert">
                                    User name min Length is 5
                                </p>
                            )}
                            {errors.Username?.type === "maxLength" && (
                                <p className="text-rose-600" role="alert">
                                    User name max Length is 15
                                </p>
                            )}
                            {errors.Username?.type === "pattern" && (
                                <p className="text-rose-600" role="alert">
                                    only letters and numbers are allowed
                                </p>
                            )}

                            <div className=" email mb-3">
                                <input
                                    className="input-bordered input   border-gray-200  w-full   "
                                    type="email"
                                    label="email address"
                               
                                    {...register("email", {
                                        required: true,
                                        pattern: /^\S+@\S+\.\S+$/,
                                    })}
                                />
                            </div>
                            {errors.email?.type === "required" && (
                                <span className="text-rose-600"> email field is required</span>
                            )}
                            {errors.email?.type === "pattern" && (
                                <p className="text-rose-600" role="alert">
                                    enter valid email
                                </p>
                            )}

                            <div className="Password mb-3">
                                <input
                                    className="input-bordered input   border-gray-200  w-full   "
                                    type='password'
                                    label="Create password"
                                  
                             
                                    required
                                    placeholder="password"
                          
                                    {...register("password", {
                                        required: true,
                                        minLength: 8,
                                        maxLength: 20,
                                        pattern:
                                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
                                    })}
                                />
                            </div>
                            {errors.password?.type === "required" && (
                                <span className="text-rose-600"> password field is required</span>
                            )}
                            {errors.password?.type === "pattern" && (
                                <p className="text-rose-600" role="alert">
                                    Enter valid password
                                </p>
                            )}
                            {errors.password?.type === "minLength" && (
                                <p className="text-rose-600" role="alert">
                                    password must be at least 8 Numbers
                                </p>
                            )}

                            <button className='btn w-full border-0 bg-gradient-to-r from-emerald-700 to-emerald-500'
                                type="submit"

                            >
                                Sign up
                            </button>
                         
                        </form>
















                        <p className="text-sm text-rose-600 text-center pt-2">
                            Already have an account?
                            <NavLink className="text-sm text-sky-500 text-center" to="/login" >
                                Sign in
                            </NavLink>
                        </p>

                    </div>
                </div>
                <div className='basis-1/2 rounded-md shadow-lg max-w-md mx-auto'>
                    <img src={California}
                        className="w-full rounded-md shadow-lg " />
                </div>
            </section>
        </main>
    )
}

export default Signup