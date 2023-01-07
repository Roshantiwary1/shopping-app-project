import React from 'react'
import "./Foote.css"
import { Link } from 'react-router-dom'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'
import {TfiLocationPin} from "react-icons/tfi"
import {HiOutlinePhone} from "react-icons/hi"
import {CgMail} from "react-icons/cg"

const Footer = () => {
  const year=new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
              <div>
                <h1 className='text-white fs-5 fw-800'>Multimart</h1>
              </div>
            <p className="footer__text mt-4">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis enim omnis quae aperiam excepturi voluptas dolores adipisci, quos in vero!
            </p>
          </Col>
          <Col lg='3'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Top Categories</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
                <p><Link to='#'>Mobiles</Link></p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
              <p><Link to='#'>Modern Sofa</Link></p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
              <p><Link to='#'>Arm Chairs</Link></p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
              <p><Link to='#'>Watches</Link></p>
              </ListGroupItem>
            </ListGroup>
          </div>
          </Col>
          <Col lg='2'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Useful Links</h4>
            <ListGroup>
              <ListGroupItem className='ps-0 border-0'>
              <p><Link to='#'>Shop</Link></p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
              <p><Link to='#'>Cart</Link></p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
              <p><Link to='#'>Login</Link></p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0'>
              <p><Link to='#'>Privacy Policy</Link></p>
              </ListGroupItem>
            </ListGroup>
          </div>
          </Col>
          <Col lg='3'>
          <div className="footer__quick-links">
            <h4 className="quick__links-title">Contacts</h4>
            <ListGroup className='footer__contact'>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                <span><TfiLocationPin/></span>
                <p>Bokaro Balidih Pandey tola 827014</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><HiOutlinePhone/></span>
                <p>+91 6204989754</p>
              </ListGroupItem>
              <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
              <span><CgMail/></span>
                <p>tiwariroshan9999@gmail.com</p>
              </ListGroupItem>
            </ListGroup>
          </div>
          </Col>
          <Col lg='12'>
            <p className="footer__copyright text-center"><span>&#169;</span> copyright {year} developed by Roshan Tiwary All Right Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
