import React from 'react'
import "./Services.css"
import { Container,Col,Row } from 'reactstrap'
// import { motion } from 'framer-motion'
import serviceData from '../assests/data/serviceData'

const Services = () => {
  return (
   <section className='services'>
     <Container >
        <Row> 
            {serviceData.map((service,index)=>(
                <Col lg="3" md="6" key={index}>
                <div className="service__item" style={{backgroundColor:`${service.bg}`}}>
                    <span><service.icon style={{fontSize:"2.1rem",transform:"translateY(-13px)"}}/></span>
                    <div>
                        <h3>{service.title}</h3>
                        <p>{service.subtitle}</p>
                    </div>
                </div>
                </Col>
            ))}
               
           
        </Row>
        </Container>
   </section>
  )
}

export default Services