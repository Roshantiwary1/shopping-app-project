import React,{useState,useEffect,useRef} from 'react'
import { useParams } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';
import products from './../assests/data/products';
import { Helmet } from './../components/helmet/Helmet';
import CommonSection from './../components/UI/CommonSection';
import {AiTwotoneStar} from "react-icons/ai"
import {BsStarHalf} from "react-icons/bs"
import { motion } from 'framer-motion';
import "../styles/ProductDetails.css"
import Productlist from './../components/UI/Productlist';
import { cartActions } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const PrductDetails = () => {
  const {id}=useParams();

  const userNameRef=useRef();
  const userMsgRef=useRef();

  const [tab,setTab]=useState('desc')
  const [star,setStar]=useState(0)

  const product=products.find(item=>item.id===id);
  const {productName,imgUrl,description,reviews,avgRating,price,shortDesc}=product;

  const SuggestedItem=products.filter(item=>item.category===product.category);

  const [review,setReview]=useState(reviews);

  const dispatch=useDispatch()

  const addItemHandler=()=>{
    dispatch(cartActions.addItem({
      id,
      productName,
      price,
      image:imgUrl
    }))
    toast.success("Added To The Cart")
  }

  useEffect(()=>{
    window.scrollTo(0,0)
  },[product])

  const submitHandler=(e)=>{
    e.preventDefault();

    const userReview={
      userName:userNameRef.current.value,
      rating:star,
      text:userMsgRef.current.value
    }
    setReview(prevReview=>{               /*important concept*/ 
      return [...prevReview,userReview]
      })
  }

  return (
    <Helmet title={productName}>
    <CommonSection title={productName}/>
   <section className='pt-0 '>
   <Container>
      <Row>
        <Col lg="6">
        <img className='img' src={imgUrl} alt="" />
        </Col>
        <Col lg="6">
        <div className="product__details mt-4">
          <h2 className='fs-3'>{productName}</h2>
          <div className="product__rating d-flex gap-5 mb-3 align-items-center">
          <div>
            <span><AiTwotoneStar style={{color:"coral"}}/></span>
            <span><AiTwotoneStar style={{color:"coral"}}/></span>
            <span><AiTwotoneStar style={{color:"coral"}}/></span>
            <span><AiTwotoneStar style={{color:"coral"}}/></span>
            <span><BsStarHalf style={{color:"coral"}}/></span>
         </div>
         <p>(<span>{avgRating}</span> ratings)</p>
          </div>
          <span className='product__price'>${price}</span>
          <p className='mt-3'>{shortDesc}</p>
          <motion.button whileTap={{scale:1.1}} onClick={addItemHandler} className="buy__btn text-white">Add To Cart</motion.button>
        </div>
        </Col>
      </Row>
    </Container>
   </section>

   <section >
    <Container>
      <Row>
        <Col lg="12">
          <div className="tab__wrapper d-flex align-items-center gap-5">
         <h6 className={tab==='desc'?'active':''} onClick={()=>setTab('desc')}>Description</h6>
         <h6 className={tab==='review'?'active':''}  onClick={()=>setTab('review')}>Review ({reviews.length})</h6>
          </div>  
          <div className="tab__content mt-4">
         {tab==="desc" && <p>{description}</p>}
         {tab==="review" && (
          <div className="product__review">
            <div className="review__wrapper">
              <ul>
                {review?.map((item,index)=>(<li key={index}><h5>{item.userName}</h5><span>{item.rating} (rating)</span><p>{item.text}</p></li>))}
              </ul>
            </div>
          </div>
         )}
          </div>
          <div className="review__form">
              <h4>Leave Your Experince</h4>
              <form action="" onSubmit={submitHandler}>
            <div className="form__group">
                <input type="text" placeholder='Enter Name' ref={userNameRef}/>
            </div>
            <div className="form__group d-flex align-items-center gap-5 rating__group">
               <motion.span whileTap={{scale:"1.1"}} onClick={()=>setStar(1)}>1<AiTwotoneStar/></motion.span>
               <motion.span whileTap={{scale:"1.1"}} onClick={()=>setStar(2)}>2<AiTwotoneStar/></motion.span>
               <motion.span whileTap={{scale:"1.1"}} onClick={()=>setStar(3)}>3<AiTwotoneStar/></motion.span>
               <motion.span whileTap={{scale:"1.1"}} onClick={()=>setStar(4)}>4<AiTwotoneStar/></motion.span>
               <motion.span whileTap={{scale:"1.1"}} onClick={()=>setStar(5)}>5<AiTwotoneStar/></motion.span>
            </div>
            <div className="form__group">
                <textarea rows='4' placeholder='Leave Your Message...' ref={userMsgRef} />
            </div>
            <button className="buy__btn text-white mt-3">Submit</button>
              </form>
          </div>
        </Col>
        <Col lg="12" className='mt-5'>
   <h2 className='related__title'>You May Also Like</h2>
   </Col>
    <Productlist ProductData={SuggestedItem}/>
      </Row>
    </Container>
   </section>
    </Helmet>
  )
}

export default PrductDetails
