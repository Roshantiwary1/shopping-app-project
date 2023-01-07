import React from 'react'
import { Container, Row } from 'reactstrap'
import {NavLink, useNavigate } from 'react-router-dom'
import "../styles/AdminNav.css"
import {AiOutlineSetting} from "react-icons/ai"
import useAuth from './../custom-hooks/useAuth';
import {MdOutlineNotificationsNone} from "react-icons/md"

const adminNav=[
 {
   displayName:"Dashboard",
   path:"/dashboard"
},
{
  displayName:"Add Products",
  path:"/dashboard/add-products"
},
 {
   displayName:"All Products",
   path:"/dashboard/all-products"
},
 {
   displayName:"User",
   path:"/dashboard/user"
},
]

export const AdminNav = () => {
  

  const {currentUser} =useAuth();
  const navigate=useNavigate();
  
  return (
    <>
<header className='admin__header'>
<div className="admin__nav-top">
<Container>
  <div className="admin__nav__wrapper-top">
  <div className="logo d-flex align-items-center">
    <div>
    <h1 onClick={()=>{navigate("/")}}>Multimart</h1>
     </div>
    </div>
    <div className="search__box">
      <input type="search" placeholder='Search...'/>
    </div>
<div className="admin__nav__top-right">
  <span><MdOutlineNotificationsNone/></span>
  <span><AiOutlineSetting/></span>
  <img src={currentUser?.photoURL} alt="user" />
</div>
  </div>
</Container>
</div>
</header>

<section className='admin__menu pt-0'>
<Container>
  <Row>
    <div className="admin__navigation">
    <ul>
      {adminNav.map((nav,index)=>
      <li key={index}>
        <NavLink to={nav.path} className={(navitem)=>navitem.isActive?"nav__is_active":""}>{nav.displayName}</NavLink>
      </li>)}
      </ul>
    </div>
  </Row>
</Container>
</section>

</>
  )
}
