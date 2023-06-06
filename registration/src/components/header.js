import React from 'react';
 
import { Link } from 'react-router-dom';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import {
    Col, Container, Row, 
 
 List,
 
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
                          <List className="navbar-nav">
                                  <li className="active"><NavLink href="/">Home</NavLink></li>
                                  <li><NavLink href="/about">About</NavLink></li>  
                                  <li><NavLink href="/events"> Events </NavLink></li>  
                                  <li><NavLink href="/result"> Result </NavLink></li>
                                  <li><NavLink href="/contact"> Contact Us </NavLink></li>
                              
                          </List>

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