import React, { useState, useEffect } from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../../firebase-config';
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/Backgroddund.png'
import { logInOut } from "../../store/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { getAuth, onAuthStateChanged } from "firebase/auth";

 import './login.css'
const Login = () => {
    const navigate = useNavigate();

    const dispatch = useDispatch();
    const {
        register,
        formState: { errors },
        handleSubmit,
        watch,
        getValues,
    } = useForm();
    const onSubmit = async(data) => {

       await signInWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
            const user = userCredential.user;
            

            console.log(auth);

            dispatch(logInOut());
            navigate("/home")
            console.log(user);

        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }

    const auth = getAuth();
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                
                const uid = user.uid;
                localStorage.setItem("token", uid);
                console.log("uid", uid);
            } else {
                console.log("user is logged out");
            }
        });
    }, []);
 
    return(
        <>
            <main className='container mx-auto login_container' >        
                <section className='mx-auto flex column  '>
                    <div className=' mx-auto border-gray-100 border-2 p-6 rounded-md shadow-lg'>                                            
                  
                        <img src={logo}
                            className=" mx-auto max-w-[12rem]" alt="Louvre" />                      
                        <h3 className='text-2xl font-semibold py-4 text-center'> Login</h3>                       
                                                       
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            className=" xl:w-96 lg:w-80 md:w-72 mx-auto"
                        >
                        
                            <div className=" email mb-3">
                                <input
                                    className="input-bordered input   border-gray-200  w-full   "
                                    type="email"
                                    label="email address"
                                    placeholder="Email"

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
                                    Enter valid password
                                </p>
                            )}

                            <button className='btn w-full border-0 bg-gradient-to-r from-emerald-700 to-emerald-500'
                                type="submit"

                            >
                                Log in
                            </button>

                        </form>
                       
                        <p className="text-sm text-rose-600 text-center pt-2">
                            No account yet? {' '}
                            <NavLink className="text-sm text-sky-500 text-center" to="/signup">
                                Sign up
                            </NavLink>
                        </p>
                                                   
                    </div>
                </section>
            </main>
        </>
    )
}
 
export default Login