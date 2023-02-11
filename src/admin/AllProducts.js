import React, { useEffect } from 'react'
import { Col, Container, Row} from 'reactstrap';
import useGetData from './../custom-hooks/useGetData';
import { db } from '../firebase/firebase';
import {doc,deleteDoc} from 'firebase/firestore'
import { toast } from 'react-toastify';
import "../styles/Cart.css"

export const AllProducts = () => {

  useEffect(()=>{
    window.scrollTo(0,0)
  },[])

  const deleteProduct=async(id)=>{
    await deleteDoc(doc(db,'products',id))
    toast.success("deleted");
  }
  const {data:productsData,loading}=useGetData('products')
  console.log(productsData)
  return (
    <section>
      <Container>
        <Row>
          <Col lg='12'>
          {loading?<h4 className='pt-4'>Loading......</h4>:(<table className='table'>
              <thead>
                <tr className='tuble'>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
              {productsData.map((data,index)=>(
                <tr className='teble' key={index}>
                  <td><img src={data.imgURL} alt="product" /></td>
                  <td>{data.title}</td>
                  <td>{data.category}</td>
                  <td>{data.price}</td>
                  <td><button className='btn btn-danger' onClick={()=>{deleteProduct(data.id)}}>Delete</button></td>
                </tr>
             ))}
              </tbody>
            </table>)}
          </Col>
        </Row>
      </Container>
    </section>
  )
}
