import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import useGetData from './../custom-hooks/useGetData';
import { db } from '../firebase/firebase';
import {doc,deleteDoc} from 'firebase/firestore'
import { toast } from 'react-toastify';
import "../styles/Cart.css"

const User = () => {
    const {data:userData,loading}=useGetData('user')
    const deleteProduct=async(id)=>{
        await deleteDoc(doc(db,'user',id))
        toast.success("deleted");
      }
  return (
    <Container>
        <Row>
            <Col lg='12'>
            <h4>users</h4>
            </Col>
            <Col lg="12" className='pt-5'>
               {loading?<h4>Loading...</h4>:( <table className='table'>
                    <thead>
                        <tr className='tuble'>
                            <th>Image</th>
                            <th>UserName</th>
                            <th>Email</th>
                            <th>Action</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {userData.map((user,index)=>(
                            <tr className='teble' key={index}>
                            <td><img src={user.photoURL} alt="asd" /></td>
                            <td>{user.displayName}</td>
                            <td>{user.email}</td>
                            <td><button className="btn btn-danger" onClick={()=>{deleteProduct(user.uid)}}>Delete</button></td>
                        </tr>
                        ))}
                    </tbody>
                </table>)}
            </Col>
        </Row>
    </Container>
  )
}

export default User