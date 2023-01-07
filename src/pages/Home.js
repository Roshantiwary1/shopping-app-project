import React,{useState,useEffect} from 'react'
import { Container,Row,Col } from 'reactstrap'
import { Helmet } from '../components/helmet/Helmet'
import heroImg from "../assests/images/hero-img.png"
import "../styles/Home.css"
import { Link } from 'react-router-dom'
import {motion} from "framer-motion"
import Services from '../services/Services'
import Productlist from './../components/UI/Productlist';
import products from "../assests/data/products"
import CounterImg from "../assests/images/counter-timer-img.png"
import Clock from '../components/UI/Clock'

const Home = () => {
  const year=new Date().getFullYear();

  useEffect(()=>{
    window.scrollTo(0,0);
  })

  const [trendingProducts,setTrendingProducts]=useState([]);
  const [bestSalesProducts,setBestSalesProducts]=useState([]);
  const [mobileProducts,setMobileProducts]=useState([]);
  const [wirelessProducts,setWirelessProducts]=useState([]);
  const [popularProducts,setPopularProducts]=useState([]);

  useEffect(()=>{
    const filteredTrendingData=products.filter(item=>item.category==='chair')
    const filteredBestSalesProducts=products.filter(item=>item.category==='sofa')
    const filteredMobileProducts=products.filter(item=>item.category==='mobile')
    const filteredwirelessProducts=products.filter(item=>item.category==='wireless')
    const filteredPopularProducts=products.filter(item=>item.category==='watch')

    setTrendingProducts(filteredTrendingData);
    setBestSalesProducts(filteredBestSalesProducts);
    setMobileProducts(filteredMobileProducts);
    setWirelessProducts( filteredwirelessProducts);
    setPopularProducts(filteredPopularProducts);
  },[])

  return (
    <Helmet title="Home">
     <section className='hero__section'>
     <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className="hero__content">
            <p className='hero__subtitle'>Trending products in {year} </p>
            <h2>Make Your Interior More Minimalistic and Modern</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum itaque ad ullam sapiente laboriosam magni sunt non temporibus ea quis?</p>
            <motion.button whileTap={{scale:1.1}} className="buy__btn"><Link to="shop">SHOP NOW</Link></motion.button>
          </div>
        </Col>
        <Col lg="6" md="6">
        <div className="hero__img">
          <img src={heroImg} alt="hero" />
        </div>
        </Col>
      </Row>
     </Container>

     </section>

     <Services/>

     <section className='trending__product'>
      <Container>
        <Row>
          <Col lg="12" className='text-center'>
          <h2 className="section__title">Trending Products</h2>
          </Col>
          <Productlist ProductData={trendingProducts}/>
        </Row>
      </Container>
     </section>

     <section className='best__sales'>
     <Container>
        <Row>
          <Col lg="12" className='text-center'>
          <h2 className="section__title">Best Sales</h2>
          </Col>
          <Productlist ProductData={bestSalesProducts}/>
        </Row>
      </Container>
     </section>

     <section className="timer__counter">
      <Container>
        <Row>
          <Col lg="6" md="6">
        <div className="clock__upper-content">
          <h4 className='text-white fs-6 mb-2'>Limited Offer</h4>
          <h3  className='text-white fs-6 mb-3' >Quality Armchair</h3>
        </div>
          <Clock/>
          <motion.button whileTap={{scale:1.1}} className="store__btn"><Link to='/shop'>Visit Store</Link></motion.button>
          </Col>
          <Col lg="6" md="6" className='text-end counter__img'>
          <img src={CounterImg} alt="counter" />
          </Col>
        </Row>
      </Container>
      </section>
      <section className="new__arrivals">
      <Container>
        <Row>
          <Col lg="12" className='text-center mb-5'>
          <h2 className="section__title">Best Sales</h2>
          </Col>
          <Productlist ProductData={mobileProducts}/>
          <Productlist ProductData={wirelessProducts}/>
        </Row>
      </Container>
      </section>

      <section className="popular__category">
      <Container>
        <Row>
          <Col lg="12" className='text-center mb-5'>
          <h2 className="section__title">Popular In Category</h2>
          </Col>
          <Productlist ProductData={popularProducts}/>
        </Row>
      </Container>
      </section>
      

   </Helmet>
  )
}

export default Home
