import React from 'react'
import Footer from '../../utils/footer/Footer'
import Navbar from '../../utils/nav/Navbar'

const Layout = ({ children }) => {
     return (<>
          
          <Navbar/>
          
          {children}
          <Footer/>
     
     </>)
}

export default Layout