import React from 'react'
import {Outlet} from 'react-router-dom'
import Footer from './components/Footer/Footer.jsx'
import Header from './components/Header/Header.jsx'

function layout() {
  return (
   <>
   <Header/>
   <Outlet/>
   <Footer/>


   </>
  )
}

export default layout