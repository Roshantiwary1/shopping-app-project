import React, { useEffect } from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../styles/Dashboard.css'
import useGetData from '../custom-hooks/useGetData';
const Dashboard = () => {
  const {data:products}=useGetData('products')
  const {data:users}=useGetData('user')
  useEffect(()=>{
    window.scrollTo(0,0)
  },[])
  return (<>
    <section>
      <Container>
        <Row>
          <Col lg='3' md='4'>
            <div className="revenue__box mb-4">
              <h5>Total Sales</h5>
              <h3>$786</h3>
            </div>
          </Col>
          <Col lg='3' md='4'>
          <div className="orders__box mb-4">
              <h5>Total Orders</h5>
              <h3>234</h3>
            </div>
          </Col>
          <Col lg='3' md='4'>
          <div className="products__box mb-4">
              <h5>Total Products</h5>
              <h3>{products.length}</h3>
            </div>
          </Col>
          <Col lg='3' md='4'>
          <div className="users__box mb-4">
              <h5>Total Users</h5>
              <h3>{users.length}</h3>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    </>
  )
}

export default Dashboard