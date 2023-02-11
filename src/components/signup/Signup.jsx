import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../firebase-config';
import California from '../../assets/images/city/California.jpg'

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(auth, email, password)
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
                // ..
            });


    }
   

    return (
        <main className='container mx-auto login_container' >
            <section className='mx-auto flex column  border-gray-100 gap-2 border-2 p-6 rounded-md shadow-lg '>
                <div className=' basis-1/2 mx-auto border-gray-100 flex column items-center justify-center '>
                    <div>
                        <h3 className='text-xl text-bold py-3 text-center'> Mars.Booking </h3>
                        <h3 className='text-2xl font-semibold py-4 text-center'> Sign up</h3>
                        <form className=' xl:w-96 lg:w-80 md:w-72' >                                                               <div className='mb-6 '>


                            <input
                                className="input-bordered input   border-gray-200  w-full   "
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Email address"
                            />
                        </div>
                            <div className='mb-6 '>


                                <input
                                    className="input-bordered input   border-gray-200  w-full   "
                                    type='password'
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Password"
                                />
                            </div>
                            <div className=' text-center mx-auto'  >
                                <button className='btn btn-success text-center mx-auto shadow-lg'
                                    type="submit"
                                    onClick={onSubmit}
                                >
                                    Sign up
                                </button>
                            </div>

                         

                        </form>
                        <p className="text-sm text-rose-600 text-center pt-2">
                            Already have an account? 
                            <NavLink className="text-sm text-sky-500 text-center" to="/login" >
                                Sign in
                            </NavLink>
                        </p>
                      
                    </div>
                </div>
                <div className='basis-1/2 rounded-md shadow-lg'>
                    <img src={California}
                        className="w-full rounded-md shadow-lg "  />
                </div>
            </section>
        </main>
    )
}

export default Signup