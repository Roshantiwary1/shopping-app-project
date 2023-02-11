import React, { useEffect } from 'react'
import "../styles/Cart.css"
import { Helmet } from './../components/helmet/Helmet';
import CommonSection from './../components/UI/CommonSection';
import { Container, Row, Col } from 'reactstrap';
import {RiDeleteBin6Line} from "react-icons/ri"
import { motion } from 'framer-motion';
import { useSelector,useDispatch } from 'react-redux';
import { cartActions } from './../redux/slices/cartSlice';
import { Link } from 'react-router-dom';


const Cart = () => {
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  const CartItems=useSelector(item=>item.cart.cartItem)
  const totalAmount=useSelector(item=>item.cart.totalAmount);
  return (
    <Helmet title='Cart'>
    <CommonSection title='Shopping Cart'/>
      <section >
        <Container>
          <Row>
            <Col lg="9">
            {CartItems.length===0 ? <h2 className='text-center mt-3 mb-3 fs-3 heading'>No Item Added In Cart</h2>:
             (<table className="table bordered">
                <thead>
                  <tr className='tuble'>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                  </tr>
                  </thead>
                  <tbody>
                 {CartItems.map((item,index)=>(
                   <Tr className='teble' key={index} item={item}></Tr>
                 ))}
                  </tbody>
               </table>)
                  }
            </Col>
            <Col lg="3">
            {
              CartItems.length>0 && (
              <div className='subtotal'>
                <h6 className='d-flex fs-5 align-items-center justify-content-between'>Subtotal
                </h6>
                <span className='fs-4 fw-bold'>${totalAmount}</span>
              <p className='mt-2 fs-6 '>Includes Shipping And Shipment Charge </p>
            <hr className='mt-2' />
              <div>
                <button className="buy__btn mt-2 text-white w-100"><Link to="/checkout">Proceed To Checkout</Link></button>
                <button className="buy__btn checkout__btn text-white w-100"><Link to="/shop">Continue Shopping</Link></button>
              </div>
              </div>)
            }
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  
  )
}

const Tr=({item})=>{
  const dispatch=useDispatch();
  const removeItemHandler=()=>{
  
    dispatch(cartActions.removeItem(item.id))
  }
 return(
   <tr>
  <td><img src={item.image} alt='chair'/> </td>
  <td>{item.productName}</td>
  <td>${item.price}</td>
  <td>{item.quantity}px</td>
  <motion.td whileTap={{scale:"1.01"}} style={{cursor:"pointer"}} ><RiDeleteBin6Line onClick={removeItemHandler} /></motion.td>
</tr>)

}

export default Cart
