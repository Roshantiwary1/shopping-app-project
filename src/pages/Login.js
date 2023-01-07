import React, { useEffect, useState } from 'react'
import { Helmet } from './../components/helmet/Helmet';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Login.css"
import { toast } from "react-toastify"
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

const Login = () => {

  useEffect(()=>{
    window.scrollTo(0,0);
  })
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const loginHandler = async(e) => {
  e.preventDefault();
  setLoading(true);
  try{
    const userCredential=await signInWithEmailAndPassword(auth,email,password)
    const user=userCredential.user;
    console.log(user)
    setLoading(false);
    toast.success("Successfully logged in")
    navigate('/');
  }
  catch(error){
    setLoading(false);
    toast.error(error.message)
  }
  }

  return (
    <Helmet title='login'>
      <section>
        <Container>
          <Row>
            {loading ? <Col lg='12' className='text-center'><h5 className='fw-bold'>Loading...</h5></Col> : (<Col lg="6" className='m-auto text-center'>
              <h3 className='fw-bold mb-4'>Login</h3>
              <form action="" className="auth__form" onSubmit={loginHandler}>
                <FormGroup className='form__group'>
                  <input type="email" placeholder='Email' value={email} onChange={(e) => { setEmail(e.target.value) }} />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="password" placeholder='Password' autoComplete='current password' onChange={(e) => { setPassword(e.target.value) }} />
                </FormGroup>
                <button type='submit' className="buy__btn auth__btn">
                  Login
                </button>
                <p>Don't have an account? <Link to="/signup">Create an account</Link></p>
              </form>
            </Col>)}
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login
