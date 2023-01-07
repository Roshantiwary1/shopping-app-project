import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'reactstrap';
import CommonSection from '../components/UI/CommonSection'
import { Helmet } from './../components/helmet/Helmet';
import "../styles/shop.css"
import {AiOutlineSearch} from "react-icons/ai"
import products from "../assests/data/products"
import Productlist from './../components/UI/Productlist';
import { useNavigate } from 'react-router-dom';


const Shop = () => {

  const navigate=useNavigate();
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  const [productsData,setProductsData]=useState(products)

  const filterHandler=(e)=>{
    const productSelected=e.target.value;
    if(productSelected==='sofa'){
     const filteredItem = products.filter(item=>item.category==='sofa')
      setProductsData(filteredItem);

    }
   
    if(productSelected==='chair'){
     const filteredItem = products.filter(item=>item.category==='chair')
      setProductsData(filteredItem);
    }
    if(productSelected==='mobile'){
     const filteredItem = products.filter(item=>item.category==='mobile')
      setProductsData(filteredItem);
    }
    if(productSelected==='wireless'){
     const filteredItem = products.filter(item=>item.category==='wireless')
      setProductsData(filteredItem);
    }
    if(productSelected==='watch'){
     const filteredItem = products.filter(item=>item.category==='watch')
      setProductsData(filteredItem);
    }
  }

  const searchHandler=(e)=>{
  const product=e.target.value;
  const searchItem=products.filter(item=>item.productName.toLocaleLowerCase().includes(product.toLocaleLowerCase()))
  
  setProductsData(searchItem);
  }

  const sortHandler=(e)=>{
    const selectedOption=e.target.value;
    if(selectedOption==='ascending'){
      let sortedProducts=productsData.sort((p1,p2)=>(p1.price>p2.price) ? 1 : (p1.price<p2.price) ? -1 : 0)
      setProductsData(sortedProducts);
      navigate('/shop');
    }
    if(selectedOption==='descending'){
      let sortedProducts=productsData.sort((p1,p2)=>(p1.price<p2.price) ? 1 : (p1.price>p2.price) ? -1 : 0)
      setProductsData(sortedProducts);
      navigate('/shop');
    }
  }

  return (
    <Helmet title='shop'>
    <CommonSection title='Products'/>
    
    <section>
      <Container >
        <Row>
          <Col lg="3" md="6">
          <div className="filter__widget">
              <select onChange={filterHandler}>
                <option>Filter By Category</option>
                <option value="mobile">Mobile</option>
                <option value="sofa">Sofa</option>
                <option value="wireless">Wireless</option>
                <option value="chair">Chair</option>
                <option value="watch">Watch</option>
              </select>
            </div>
          </Col>
          <Col lg="3" md="6">
          <div className="filter__widget">
              <select onChange={sortHandler}>
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div>
          </Col>
          <Col lg="6" md="12">
            <div className="search__box w-100">
              <input type="text" placeholder='Search ....' onChange={searchHandler} />
              <span><AiOutlineSearch/></span>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  <Container>
  <Row>
    {
      productsData.length===0?<h1 className='text-center fs-5 mb-5 fw-700'>No Products Found!</h1>:
      <Productlist ProductData={productsData}/>
    }
    </Row>
  </Container>
    </Helmet>
  )
}

export default Shop
