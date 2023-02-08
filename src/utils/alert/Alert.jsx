import React from 'react'
import  './alert.css'

const Alert = () => {
  return (
<div className="alertx transition-all duration-300">
       <div className="alert-content flex items-center justify-center transition-all duration-300">
       <div className='flex items-center justify-center gap-2'>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="    w-7 h-7">
  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>


    <h3 className='bg-gradient-to-r from-emerald-800  to-emerald-400 bg-clip-text py-3 text-center text-2xl font-bold text-transparent  '>Thank you for booking with us</h3>
  </div>
       </div>
 </div>  )
}

export default Alert