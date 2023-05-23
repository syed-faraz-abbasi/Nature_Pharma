import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
 
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import {
    Col, Container, Row, 
 
 List,
 ListGroupItem
 } from 'reactstrap';
  
 import userImg from '../components/images/Nature.png';
 
function Header() {
   
    return(
      <>
      <div className='header '>
         <Container>
         <Row>
            <Col md={2} >
            <img src={userImg} className='logo' />
            </Col>
            <Col md={6}>
              <Nav>
              <List className='design-ul'>
                  <ListGroupItem className='design-li'><Link className='dec'>Home</Link></ListGroupItem>  
                  <ListGroupItem className='design-li'><Link  className='dec'>About Us</Link></ListGroupItem>    
                  <ListGroupItem className='design-li'><Link className='dec' >Services</Link></ListGroupItem>    
                  <ListGroupItem className='design-li'><Link className='dec'>Medical Supplies</Link></ListGroupItem>    
                 <ListGroupItem className='design-li'><Link className='dec'>Resources</Link></ListGroupItem>    
                 <ListGroupItem className='design-li'><Link className='dec'>Contact Us</Link></ListGroupItem>    
              </List>
              </Nav>
            
               
           
            </Col>
            <Col md={4}>
                {/* <h3>For More Information, Please Call Us:  1236547898 </h3> */}
            </Col>
         </Row>
         </Container>
      
      </div>
      
      </>
        
    )
}
export default Header;