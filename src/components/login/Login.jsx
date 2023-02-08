import React, {useState} from 'react';
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../../../firebase-config';
import { NavLink, useNavigate } from 'react-router-dom'
 import './login.css'
const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }
 
    return(
        <>
            <main className='container mx-auto login_container' >        
                <section className='mx-auto flex column  '>
                    <div className=' mx-auto border-gray-100 border-2 p-6 rounded-md shadow-lg'>                                            
                        <h3 className='text-xl text-bold py-3 text-center'> Mars.Booking </h3>                       
                        <h3 className='text-2xl font-semibold py-4 text-center'> Login</h3>                       
                                                       
                        <form className=' xl:w-96 lg:w-80 md:w-72' >                                              
                            <div className='mb-6 '>
                            
                                <input
                                     className="input-bordered input   border-gray-200  w-full   "
                                    id="email-address"
                                    name="email"
                                    type="email"                                    
                                    required                                                                                
                                    placeholder="Email address"
                                    onChange={(e)=>setEmail(e.target.value)}
                                />
                            </div>

                            <div className='mb-6'>
                         
                                <input
                                     className="input-bordered  border-gray-200 input w-full  "
                                    id="password"
                                    name="password"
                                    type="password"                                    
                                    required                                                                                
                                    placeholder="Password"
                                    onChange={(e)=>setPassword(e.target.value)}
                                />
                            </div>
                                                
                            <div className=' text-center mx-auto'  >
                                <button   className='btn btn-success text-center mx-auto shadow-lg'                                   
                                    onClick={onLogin}                                        
                                >      
                                    Login                                                                  
                                </button>
                            </div>                               
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