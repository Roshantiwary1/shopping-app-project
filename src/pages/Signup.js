import React, { useEffect, useState } from 'react'
import { Helmet } from './../components/helmet/Helmet';
import { Container, Row, Col, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/Login.css"
import { createUserWithEmailAndPassword,updateProfile } from "firebase/auth";
import { auth } from '../firebase/firebase';
import {uploadBytesResumable, ref, getDownloadURL } from "firebase/storage"
import {setDoc,doc} from "firebase/firestore"
import { db } from '../firebase/firebase';
import { storage } from '../firebase/firebase';
import { toast } from 'react-toastify';

const Login = () => {

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [username,setUser]=useState('')
  const [file,setFile]=useState(null)
  const [loading,setLoading]=useState(false)

  const navigate=useNavigate();

  useEffect(()=>{
    window.scrollTo(0,0);
  })

const signupHandler=(e)=>{

  e.preventDefault();
  setLoading(true);
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    const storageRef=ref(storage,`images/${Date.now() + username}`)
    const uploadTask=uploadBytesResumable(storageRef,file)

    uploadTask.on(
      (error)=>{
        toast.error(error.message)
      },
      ()=>{
        getDownloadURL(uploadTask.snapshot.ref).then(async(downloadUrl)=>{
          // update profile
          await updateProfile(user,{
            displayName:username,
            photoURL:downloadUrl
          })
            // store data
          await setDoc(doc(db,"user",user.uid),{
            uid:user.uid,
            displayName:user.displayName,
            email,
            photoURL:downloadUrl
          })
        })
      }
    )
    setLoading(false);
    toast.success("Signup Sucessfully")
    navigate('/login')
  })
  .catch((error) => {
    setLoading(false);
    toast.error(error.message)
    // ..
  });
}
 
  return (
    <Helmet title='Signup'>
    <section>
      <Container>
        <Row>
        {loading?<Col lg="12" className='text-center'><h5 className='fw-bold'>Loading...</h5></Col>:
          <Col lg="6" className='m-auto text-center'>
            <h3 className='fw-bold mb-4'>Signup</h3>
            <form action="" className="auth__form" onSubmit={signupHandler}>
              <FormGroup className='form__group'>
                <input type="text" placeholder='Username' value={username}  onChange={(e)=>{setUser(e.target.value)}}/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input type="email" placeholder='Email' value={email}  onChange={(e)=>{setEmail(e.target.value)}}/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input type="password" placeholder='Password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
              </FormGroup>
              <FormGroup className='form__group'>
                <input type="file" onChange={(e)=>{setFile(e.target.files[0])}}/>
                <span></span>
              </FormGroup>
                <button className="buy__btn auth__btn">
             Signup
              </button>
              <p>Already have an account? <Link to="/login">Signin</Link></p>
             </form>
          </Col>}
        </Row>
      </Container>
    </section>
    </Helmet>
  )
}

export default Login
