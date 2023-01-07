import React, { useState} from 'react'
import { Container, Row, Col, FormGroup } from 'reactstrap';
import {toast} from "react-toastify"
import {db,storage} from "../firebase/firebase"
import {ref, uploadBytesResumable,getDownloadURL } from 'firebase/storage';
import { collection,addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {

  const navigate=useNavigate();
  const [loading,setLoading]=useState(false)

  const [image,setImage]=useState(null);
  const [title,settitle]=useState('');
  const [desc,setdesc]=useState('');
  const [description,setdescription]=useState('');
  const [price,setprice]=useState('');
  const [category,setcategory]=useState('');
  
  const AddProductHandler=async (e)=>{
    setLoading(true)
    e.preventDefault();
    try{
        const docRef =await collection(db,'products');

        const storageRef= await ref(storage,`productImages/${Date.now() + image.name}`)

        const uploadTask=uploadBytesResumable(storageRef, image)

        uploadTask.on(()=>{
              toast.error("message not uploaded!")
        },()=>{
          getDownloadURL(uploadTask.snapshot.ref).then(async(downloadURL)=>{
            await addDoc(docRef,{
              title,
              desc,
              description,
              category,
              price,
              imgURL:downloadURL,
            })
          })
        })
      setLoading(false);
        toast.success("One Product Added")
        navigate('/dashboard/all-products')
        
    }
    catch(err){
        toast.error(err.message)
        setLoading(false)
    }

  }
  return (
<section>
  <Container>
    <Row>
      <Col lg="12">
        <h4 className='mb-5'>Add Product</h4>
        {loading?<h4>Loading....</h4>:(  <form onSubmit={AddProductHandler}>
            <FormGroup className='form__group'>
              <span>Product Title</span>
              <input type="text" placeholder='Double Sofa' onChange={(e)=>(settitle(e.target.value))} required />
            </FormGroup>
            <FormGroup className='form__group'>
              <span>Short Description</span>
              <input type="text" placeholder='lorem..' onChange={(e)=>(setdesc(e.target.value))} required/>
            </FormGroup>
            <FormGroup className='form__group'>
              <span>Description</span>
              <input type="text" placeholder='Description' onChange={(e)=>(setdescription(e.target.value))} required/>
            </FormGroup>
            <div className='d-flex align-items-center justify-content-between gap-5'>
            <FormGroup className='form__group w-50'>
              <span>Price</span>
              <input type="number" placeholder='$100'onChange={(e)=>(setprice(e.target.value))} required/>
            </FormGroup>
            <FormGroup className='form__group w-50 '>
              <span>Category</span>
              <select className='w-100 p-2'onChange={(e)=>(setcategory(e.target.value))} required>
                <option>Select Category</option>
                <option value="sofa">Sofa</option>
                <option value="chair">Chair</option>
                <option value="wireless">Wireless</option>
                <option value="watch">Watch</option>
                <option value="mobile">Mobile</option>
                </select>
            </FormGroup>
            </div>

            <div>
            <FormGroup className='form__group'>
              <span>Product Image</span>
              <input type="file" onChange={(e)=>{setImage(e.target.files[0])}} required/>
            </FormGroup>
            </div>

            <button className='buy__btn text-white'>Add Product</button>
          </form>)}
      </Col>
    </Row>
  </Container>
</section>
  )
}

export {AddProduct};