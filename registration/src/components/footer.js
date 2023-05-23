import React from 'react';
 
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import {
    Col, Container, Row, 
 Nav,
 List,
 ListGroupItem
 } from 'reactstrap';
  
 import userImg from '../components/images/Nature.png';
 
function Footer() {
   
    return(
      <>
      <div className='header'>
         <Container>
         <Row>
            <Col md={2} >
            <img src={userImg} className='logo' />
            </Col>
            {/* <Col md={6}>
              <List className='design-ul'>
                  <ListGroupItem className='design-li'>Home</ListGroupItem>  
                  <ListGroupItem className='design-li'>About Us</ListGroupItem>    
                  <ListGroupItem className='design-li'>Services</ListGroupItem>    
                  <ListGroupItem className='design-li'>Medical Supplies</ListGroupItem>    
                 <ListGroupItem className='design-li'>Resources</ListGroupItem>    
                 <ListGroupItem className='design-li'>Contact Us</ListGroupItem>    
              </List>
               
           
            </Col> */}
            {/* <Col md={4}>
                <h3>For More Information, Please Call Us:  1236547898 </h3>
            </Col> */}
         </Row>
         </Container>
      
      </div>
      
      </>
        
    )
}
export default Footer;