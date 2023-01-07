import React from 'react'
import {  } from 'react-router-dom';
import {HiPlus} from "react-icons/hi"
import { Col } from 'reactstrap';
import "../../styles/ProductCard.css"
import { Link,useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { cartActions } from '../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const ProductCard = ({data}) => {

  const navigate=useNavigate();

  const dispatch=useDispatch();

  const addItemToCart=()=>{
    dispatch(cartActions.addItem({
      id:data.id,
      price:data.price,
      productName:data.productName,
      image:data.imgUrl
    }))
    toast.success("Added To Cart")
  }

  return (
    <Col lg="3" md="4" className='mb-2'>
        <div className="product__item">
        <div className="product__img">
            <motion.img whileHover={{scale:.9}} src={data.imgUrl} alt="chair" onClick={()=>navigate(`/shop/${data.id}`)}/>
        </div>
       <div className="p-2 product__info">
       <h3 className="product__name"><Link to={`/shop/${data.id}`}>{data.productName}</Link></h3>
        <span>{data.category}</span>
       </div>
        <div className="product__card-bottom d-flex align-item-center justify-content-between p-2">
            <span className='price'>${data.price}</span>
            <motion.span onClick={addItemToCart} whileTap={{scale:1.2}} style={{fontSize:".8rem",color:"white",backgroundColor:"var(--primary-color)",padding:"5px",borderRadius:"100%"}}><HiPlus/></motion.span>
        </div>
    </div>
    </Col>
  )
}

export default ProductCard