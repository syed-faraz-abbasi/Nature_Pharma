import React from 'react';
 
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import {
    Col, Container, Row, 
 Nav,
 List,
 ListGroupItem
 } from 'reactstrap';
  
 import userImg from '../components/images/Nature.png';
 import userImgh from '../components/images/ph.jpg';
 import userIm from '../components/images/photo1.jpg';
 import iconimg from '../components/images/icon1.png';
 import iconim from '../components/images/icon2.png';
 import iconim2 from '../components/images/icon2.png';
 import iconimg1 from '../components/images/icon1.png';
 import btm2_img from '../components/images/btm2_img.png';
 import icon_add from '../components/images/icon_add.png';
 import icon_clock from '../components/images/icon_clock.png';
 import icon_phone from '../components/images/icon_phone.png';
function Header() {
    return(
        <div className="container-fluid">
        
            <div className="headertop_info">
                <h2>COVID-19 vaccines (Pfizer, Moderna, and J&amp;J) and COVID -19 tests (RT-PCR and Antigen Self-Test) are now available.</h2>
            </div>
             
            
        
         <Row>
            <Col md={2} >
            <img src={userImg} className='logo' />
            </Col>
            <Col md={6}>
              <List className='design-ul'>
                  <ListGroupItem className='design-li'>Home</ListGroupItem>  
                  <ListGroupItem className='design-li'>About Us</ListGroupItem>    
                  <ListGroupItem className='design-li'>Services</ListGroupItem>    
                  <ListGroupItem className='design-li'>Medical Supplies</ListGroupItem>    
                 <ListGroupItem className='design-li'>Resources</ListGroupItem>    
                 <ListGroupItem className='design-li'>Contact Us</ListGroupItem>    
              </List>
               
           
            </Col>
            <Col md={4}>
                <h3 className='logo-content '>For More Information, Please Call Us:  1236547898 </h3>
            </Col>
         </Row>
         <Row>
            <Col md={12}>
            <img src={userImgh} className='pict'/>
             {/* <div className='pict_content'>
                <h1>
                    <span>Compassionate</span><br/><small> CARE THE </small><br/><span>PHARMACEUTICAL WAY </span>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p></h1>
             </div> */}

            </Col>
         </Row>
         <Row className='fold-1'>
            <Col md={6}>
            <img src={userIm} className='photo1'/>
            </Col>
            <Col md={6}>
             <h1 className='h_title'>
                <span>Welcome to</span>
                <small>Pharmacy</small>
            </h1>
            <p className='para'>You and your loved ones’ health come first. With high-quality medications and supplies provided by skilled and experienced pharmacists, you can guarantee to live a healthy life within your budget. We look out for everyone in the community as if they are part of our family too.</p>
            </Col>
         </Row>
         <Row>
            <Col md={12}>
            <h1 className='h_title tit'>
                <span> Services</span>
                <small>We Offer</small>
            </h1>
            </Col>
         </Row>
         <Row className='fold-3 fold-5  '>
            <Col>
            <p className='fp3'>The road to better health starts here. Whatever you need help with, we are here to assist you in recovering as soon as possible. <span>[VIEW MORE SERVICES]</span> </p>
            </Col>
         </Row>
         <Row className='fold_4 fold-5'>
            <Col md={3}>
            <img src={iconimg} className='icon1'/>
            <h1 className='heading_h1'>Pharmacy</h1>
            <p>Keep up with your <br/>medications through our help.</p>
             <button className='btn'>CLICK HERE</button>
            </Col>
            <Col md={3}>
            <img src={iconim} className='icon1'/>
            <h1 className='heading_h1'>LONG-TERM CARE</h1>
            <p>Effective medications are <br/>offered at cost-effective prices</p>
            <button className='btn'>CLICK HERE</button>
            </Col>
            <Col md={3}>
            <img src={iconim2} className='icon1'/>
            <h1 className='heading_h1'>IMMUNIZATIONS</h1>
            <p>We extend our services to <br/>long-term care facilities.</p>
            <button className='btn'>CLICK HERE</button>
            </Col>
            <Col md={3}>
            <img src={iconimg1} className='icon1'/>
            <h1 className='heading_h1'>MEDICATION</h1>
            <p>Extra protection for yourself <br/>and your family is necessary.</p>
            <button className='btn'>CLICK HERE</button>
            </Col>
         </Row>
         <Row className='fold-5'>
            <Col md={6}>
            <img src={btm2_img} className='photo1'/>
            </Col>
            <Col md={6}>
            <h1 className='h_title'>
                <span>You’re Important to Us</span><br/>
                <small>Mission Statements</small>
            </h1>
            <p className='para'>We aim to contribute to the health improvement of the residents in our community by offering safe, effective, consistent, and affordable prescriptions, medical equipment, and pharmaceutical services.</p> 
            <button className='btn'>ABOUT US</button>
            </Col>
         </Row>
         <Row className='fold-5'>
            <Col md={6}>
                <div  className='map'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.8611732316526!2d-75.17365608461836!3d39.944494879422926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6c63c1adc2739%3A0x9b05374ff4406e4d!2s1735+South+St%2C+Philadelphia%2C+PA+19146%2C+USA!5e0!3m2!1sen!2sph!4v1535509006848"  allowfullscreen=""></iframe>

                </div>
            </Col >
              <Col md={6}>
              <h1 className='h_title'>
                <span>Get in Touch</span>
                <small>Contact Information</small>
              </h1> 
                <p>Don’t hesitate to reach out to us using the information provided below.</p>
             
                <List className='design_map'>
                  <ListGroupItem className='design-li lm'>   <img src={icon_add} className=' icon_map'/> 1735 South Street<br/><span>Philadelphia, PA 19146</span></ListGroupItem>  
                  <ListGroupItem className='design-li lm'> <img src={icon_clock} className=' icon_map'/> Phone: 215-735-1200 <br/><span>Fax: 215-735-0455</span><br/> <span>Email: pennmarkrx@gmail.com</span></ListGroupItem>    
                  <ListGroupItem className='design-li lm'> <img src={icon_phone} className='icon_map '/> Business Hours: <br/>
                    <span>Monday - Friday: 9:00 AM - 6:00 PM </span><br/>  
                   <span> Saturday: 9:00 AM - 3:00 PM</span>  <br/>
                    <span>Sunday: Closed</span></ListGroupItem>    
                      
              </List>
              </Col>
         </Row>
          <Row className='footer'>
            <Col md={8} className='footer_content'>
            <List className='design-ul foot'>
                  <ListGroupItem className='design-li'>Home</ListGroupItem>  
                  <ListGroupItem className='design-li'>About Us</ListGroupItem>    
                  <ListGroupItem className='design-li'>Services</ListGroupItem>    
                  <ListGroupItem className='design-li'>Medical Supplies</ListGroupItem>    
                 <ListGroupItem className='design-li'>Resources</ListGroupItem>    
                 <ListGroupItem className='design-li'>Contact Us</ListGroupItem>    
              </List>
            </Col>
            <Col md={4}>
            <img src={userImg} className='logo footer' />   
            </Col>
          </Row>        
        </div>
    )
}
export default Header;