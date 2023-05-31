import React from 'react';
import { Link } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
 
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import {
    Col, Container, Row, 
 
 List,
 ListGroupItem,
 NavLink
 } from 'reactstrap';
  
 import userImg from '../components/images/Nature.png';
 
function Header() {
   
    return(
      <>
  <section id="header" className="header">
  	<Container fluid>
    	<Row>
        <Col md={3}>
                  <div className="logo">
                      <a href="#">
                          <img src={userImg} className="logo-w" />
                       </a> 
                  </div>
        </Col>
              
        <Col md={6}>
          <div className="nav">
                  
  
                  
                    <nav className="navbar navbar-expand-lg">
                          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse  " id="navbarNav">
                          <ul className="navbar-nav">
                                  <li className="active"><a href="#">Home</a></li>
                                <li><a href="#About"> About </a></li>  
                                  <li><a href="#events"> Events </a></li>  
                                
                                <li className="parent-menu">Downloads <i className="fa fa-angle-down" aria-hidden="true"></i>
                                        
                                        <ul className="dropdowns hide">
                                            <li><a href="#">Curriculum Vitae</a></li>
                                            <li><a href="#">Eligibility Certificate</a></li>
                                            <li><a href="#">Event Rules and Regulations</a></li>
                                            <li><a href="#">CheckList</a></li>
                                            <li><a href="#">Event Brochure</a></li>
                                      </ul>

                                    </li>
                                
                                <li><a href="#"> Result</a></li>
                                <li><a href="#Contact"> Contact Us</a></li>
                              
                          </ul>
                        </div>
                    </nav>
                </div>
        </Col>
      
        <Col md={3}>
          <div className="header-contant">
            <NavLink href="#" className="button1">Apply Now </NavLink> 
          </div>
        </Col>
              
      </Row>
    </Container>
  </section>
      
      </>
        
    )
}
export default Header;