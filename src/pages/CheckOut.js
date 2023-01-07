import React, { useEffect } from 'react'
import { Helmet } from '../components/helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Container, Row, Col, FormGroup } from 'reactstrap';
import "../styles/Checkout.css"
import { useSelector } from 'react-redux';

const CheckOut = () => {
  const totalQuantity = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)
  useEffect(()=>{
    window.scrollTo(0,0);
  })
  return (
    <Helmet title='Checkout'>
      <CommonSection title='Checkout'/>
      <section>
        <Container>
          <Row>
            <Col lg='8'>
            <h4 className='mb-4 fw-bold'>Billing Information</h4>
            <form action="" className='billing__form'>
              <FormGroup className='form__group'>
                <input type="text" placeholder='Enter Your Name' />
              </FormGroup>
              <FormGroup className='form__group'>
                <input type="text" placeholder='Phone Number' />
              </FormGroup>
              <FormGroup className='form__group'>
                <input type="text" placeholder='Enter Your Email' />
              </FormGroup>
              <FormGroup className='form__group'>
                <input type="text" placeholder='City' />
              </FormGroup>
              <FormGroup className='form__group'>
                <input type="text" placeholder='Street' />
              </FormGroup>
              <button className="buy__btn mt-2 text-white" onClick={(e)=>e.preventDefault()}>Submit</button>
              </form>
            </Col>
            <Col lg="4">
              <div className="checkout__cart">
            <h4 className=' fw-bold'>Summary</h4>
            <hr className='text-dark mt-3 ' />
                <h6>Total quantitiy <span>{totalQuantity}</span></h6>
                <h6>SubTotal <span>${totalAmount}</span></h6>
               <h6> <span>Shipping: <br />Free Shipping</span> <span>$0</span></h6>
               <hr className='text-dark mt-3 ' />
                <h4>Total Cost <span>${totalAmount}</span></h4>
              <button className="buy__btn auth__btn w-100">Place an order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default CheckOut
