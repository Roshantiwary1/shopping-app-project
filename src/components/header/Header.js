import React,{useState,useEffect} from 'react'
import "./Header.css"
import { Link, NavLink, useNavigate } from 'react-router-dom'
import logo from "../../assests/images/eco-logo.png"
import user_icon from "../../assests/images/user-icon.png"
import { Container,Row } from 'reactstrap'
import {BsSuitHeart,BsBag} from "react-icons/bs"
import {RxHamburgerMenu} from "react-icons/rx"
import {motion} from "framer-motion"
import { useSelector } from 'react-redux'
import useAuth from '../../custom-hooks/useAuth'
import { auth } from '../../firebase/firebase'
import { signOut } from 'firebase/auth'
import { toast } from 'react-toastify'

const Header = () => {

    const {currentUser} =useAuth();

    const totalQuantity=useSelector(state=>state.cart.totalQuantity);

const [nav,setNav]=useState(false);
const [showProfile,setShowProfile]=useState(false);
const [showMobileMenu,setShowMobileMenu]=useState(false)

const logout=()=>{
    signOut(auth).then(()=>{toast.success("Logout Successfully") ; navigate('/')}).catch((error)=>{toast.error(error.message)})
}

const navTransition=()=>{
    if(window.scrollY>100)
{
    setNav(true)
}else{
    setNav(false)
}
}

useEffect(()=>{
    window.addEventListener("scroll",navTransition); 
},[])

    const NavLinks=[
        {
            path:"/",
            name:"Home",
        },
        {
            path:"/shop",
            name:"Shop",
        },
        {
            path:"/cart",
            name:"Cart"
        }
    ]

    const navigate=useNavigate();
  return (
   <header className={`header ${nav && 'sticky__header'}`}>
 <Container>
    <Row>
        <div className="nav__wrapper">
            <div className="logo">
                <img onClick={()=>{navigate("/")}} src={logo} alt="logo" />
                <div>
                    <h1 className='text-dark' onClick={()=>{navigate("/")}}>Multimart</h1>
                    {/* <p>Since 1992</p> */}
                </div>
            </div>
            <div className={ `navigation ${showMobileMenu && "active__menu" }`}onClick={()=>{setShowMobileMenu(!showMobileMenu)}}>
                <ul className='menu'>
                   {NavLinks.map((nav,index)=>
                    (<li className="nav__item" key={index}>
                    <NavLink to={nav.path} className={(navclass)=>navclass.isActive?"nav__active" : "" } >
                        {nav.name}
                    </NavLink>
                    </li>)
                   )}
                    
                </ul>
            </div>
            <div className="nav__icons">
            <span className='fav__icon'><BsSuitHeart/>
            <span className='badge'>1</span>
            </span>
                <span className='cart__icon' ><BsBag onClick={()=>navigate("/cart")}/>
                <span className='badge'>{totalQuantity}</span>
                </span>
                <div className='profile'>
                <motion.img whileTap={{scale:1.1}} src={currentUser?currentUser.photoURL:user_icon} alt="" onClick={()=>{setShowProfile(!showProfile)}}/>
                
                <div onClick={()=>{setShowProfile(!showProfile)}} className={`profile__actions ${showProfile && 'show__profileActions'}`}>
                    {
                        currentUser?<div  className='text-start text-dark'><div onClick={logout} >Logout</div><Link   to='/dashboard'>Dashboard</Link></div>:
                        (
                            <div className='d-flex flex-column fw-500 text-start text-dark'>
                            <Link to='/signup'>Signup</Link>
                            <Link to='/login'>Login</Link>
                            <Link to='/dashboard'>Dashboard</Link>
                            </div>)}
                </div>

                </div>
                <div className="mobile__menu" >
                    <span onClick={()=>{setShowMobileMenu(!showMobileMenu)}}><RxHamburgerMenu/></span>
                </div>
            </div>

            
        </div>
    </Row>
 </Container>
    </header>
  )
}

export default Header
