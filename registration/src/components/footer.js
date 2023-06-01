import React from 'react';
 
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import {
    Col, Container, Row, List, NavLink 
 } from 'reactstrap';
  
 import userImg from '../components/images/Nature.png';
 import call_icon from '../components/images/call_icon.png';
 import mail_icon from '../components/images/mail_icon.png';
 import location_icon from '../components/images/location_icon.png';


import { FaFacebookF,FaInstagram,FaLinkedinIn,FaYoutube } from "react-icons/fa";
 
 
function Footer() {

   
    return(
      <>
<section className="contantinfo-main">
  <Container>
    <Row>
      <Col md={8}>
      <div className="contantinfo">
         <h4>Contact Info</h4>
          <p>Sharda University takes pride in providing multidisciplinary education options to our international students by providing them a platform where knowledge meets achievement</p>
        </div>
      </Col>

      <Col md={4}>
         <div className="contantinfo">
         <NavLink href="#" className="button2">Apply Now</NavLink>
         </div>
      </Col>
    </Row>
    <div  className="contact_info_list">
    <Row>  
      <Col md={6}>
        <List>
                <li>
                  <div className="img">
                    <img src={mail_icon} alt="image" /> 
                  </div>
                  <div className="text">
                     <span>Email Us</span>
                     <a href="mailto:example@gmail.com">indo@sharda.ac.in</a>
                     <a href="mailto:example@gmail.com">contanct@sharda.ac.in</a>
                  </div>
                </li>
                <li>
                  <div className="img">
                   <img src={call_icon} alt="image" />  
                  </div>
                  <div className="text">
                    <span>Call Us</span>
                    <a href="tel:+9971058458">+000 000 0000</a>
                     <a href="tel:+9971058458">+000 000 0000</a>  
                  </div>
                </li>
                 
                <li>
                  <div className="img">
                     <img src={location_icon} alt="image" />  
                  </div>
                  <div className="text">
                    <span>Location</span>
                       <p>Plot No. 32-34, Knowledge Park III,Greater Noida, <br /> Uttar Pradesh 201310</p>
                  </div>
                </li>
        </List>  
      </Col> 
      <Col md={6}>
      <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14028.669862661634!2d77.4826241!3d28.4745029!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cea9cae68659b%3A0xc95b3bd7cf26316e!2sSharda%20Hospital!5e0!3m2!1sen!2sin!4v1685507289065!5m2!1sen!2sin"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            />
            
      </Col>
    </Row>
    </div>
  </Container>
</section>

<section className="copyright">
  <Container>
    <Row>
      <Col md={4}>
        <div className="footer-social">
          <List>
            <li><NavLink href="#" target="_blank"><FaFacebookF /></NavLink></li>
            <li><NavLink href="#" target="_blank"><FaInstagram /></NavLink></li>
            <li><NavLink href="#" target="_blank"><FaLinkedinIn /></NavLink></li>
            <li><NavLink href="#" target="_blank"><FaYoutube /></NavLink></li>
          </List>
        </div>

        <div className="clearfix"></div>
      
      </Col>

      <Col md={4}>
        <img src={userImg} alt='Logo' />
      </Col>

      <Col md={4}>
        <p>Copyright © Sharda Hospital </p>
      </Col>
    </Row>
  </Container>
</section>
      
      </>
        
    )
}
export default Footer;