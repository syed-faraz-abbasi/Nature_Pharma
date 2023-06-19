import React from 'react';
 
 // import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import {
    Col, Container, Row, 
 
 List,
 
 NavLink
 } from 'reactstrap';
  
 import userImg from '../components/images/Nature.png';
import { Link } from 'react-router-dom';
 
function Header() {
   
    return(
      <>
  <section id="header" className="header">
  	<Container fluid>
    	<Row>
        <Col md={3}>
                  <div className="logo">
                      <Link to="/">
                          <img src={userImg} className="logo-w"  alt='iii'/>
                       </Link> 
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
                                  <li className="active"><Link to="/">Home</Link></li>
                                  <li><Link to="/about">About</Link></li>  
                                  <li><Link to="/services"> Services </Link></li>  
                                  <li><Link to="/medical"> Medical Supplies </Link></li>
                                  <li><Link to="/resources"> Resouces </Link></li>

                                  <li><Link to="/contact"> Contact Us </Link></li>
                              
                          </List>

                        </div>
                    </nav>
                </div>
        </Col>
      
        <Col md={3}>
          <div className="header-contant">
            <Link to="#" className="button1">Apply Now </Link> 
          </div>
        </Col>
              
      </Row>
    </Container>
  </section>
      
      </>
        
    )
}
export default Header;