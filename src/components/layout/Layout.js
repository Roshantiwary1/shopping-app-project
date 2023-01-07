import React from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'
import Router from '../../routers/Router'
import { useLocation } from 'react-router-dom'
import  {AdminNav}  from './../../admin/AdminNav';
const Layout = () => {
  const location=useLocation();
  return (
    <>
    {location.pathname.startsWith('/dashboard') ? <AdminNav/> : <Header /> }
     
     <Router />
      <Footer />
    </>
  )
}

export default Layout
