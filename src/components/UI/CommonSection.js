import React from 'react'
import "../../styles/CommonSection.css"
import { Container } from 'reactstrap'

const CommonSection = ({title}) => {
  return <section className="common__section">
            <Container className='text-center'>
                <h1>{title}</h1>
            </Container>
  </section>
   
  
}

export default CommonSection