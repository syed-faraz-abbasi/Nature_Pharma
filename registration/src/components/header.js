import React from 'react';
import Carousel from "react-multi-carousel";
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import { Image } from "semantic-ui-react"; 
import {
    Col, Container, Row, 
 Nav,
 List,
 ListGroupItem
 } from 'reactstrap';
 
 import userImg from '../components/images/Nature.png';
 import userImgh from '../components/images/ph.jpg';
 import userIm from '../components/images/photo1.jpg';
  
 const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 60
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      paritialVisibilityGutter: 50
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 30
    }
  };
  const images = [
    "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
    "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  ];

function Header({ deviceType }) {
    return(
        <>
        <Nav className='navbar'>
            <Row>
            <Col sm={12}>
             <div className="headertop_info">
                <h2>COVID-19 vaccines (Pfizer, Moderna, and J&amp;J) and COVID -19 tests (RT-PCR and Antigen Self-Test) are now available.</h2>
            </div>
            </Col>
            </Row> 
            
        </Nav>
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
            <img src={userImgh} className='ph'/>

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
         <Row className='fold-3  '>
            <Col>
            <p className='fp3'>The road to better health starts here. Whatever you need help with, we are here to assist you in recovering as soon as possible. <span>[VIEW MORE SERVICES]</span> </p>
            </Col>
         </Row>
         <Row>
            <Col >
              <div class="container">
                        <h1>Use Bootstrap 3's carousel to show multiple items per slide.</h1>
                        <div class="row">
                            <div class="col-md-12">
                                {/* <div class="carousel slide multi-item-carousel" id="theCarousel">
                                <div class="carousel-inner">
                                <div class="item active">
                                    <div class="col-xs-4"><a href="#1">
                                    <img src={userIm}  className ='img-responsive'/></a></div>
                                </div>
                                <div class="item">
                                    <div class="col-xs-4"><a href="#1">
                                    <img src={userIm}  className ='img-responsive'/></a></div>
                                </div>
                                <div class="item">
                                    <div class="col-xs-4"><a href="#1">
                                    <img src={userIm}  className ='img-responsive'/></a></div>
                                </div>
                                <div class="item">
                                    <div class="col-xs-4"><a href="#1">
                                    <img src={userIm}  className ='img-responsive'/></a></div>
                                </div>
                                <div class="item">
                                    <div class="col-xs-4"><a href="#1">
                                    <img src={userIm}  className ='img-responsive'/></a></div>
                                </div>
                                <div class="item">
                                    <div class="col-xs-4"><a href="#1">
                                    <img src={userIm}  className ='img-responsive'/></a></div>
                                </div>
                                
          
                                    <div class="item">
                                        <div class="col-xs-4"><a href="#1">
                                        <img src={userIm}   className='img-responsive'/></a></div>
                                    </div>
                                    
                                    
                                    </div>
                                    <a className="left carousel-control" href="#theCarousel" data-slide="prev"><i className="glyphicon glyphicon-chevron-left"></i></a>
                                    <a className="right carousel-control" href="#theCarousel" data-slide="next"><i className="glyphicon glyphicon-chevron-right"></i></a>
                                </div> */}

<Carousel
      ssr
      partialVisbile
      deviceType={deviceType}
      itemClass="image-item"
      responsive={responsive}
    >
      {images.slice(0, 5).map(image => {
        return (
          <Image
            draggable={false}
            style={{ width: "100%", height: "100%" }}
            src={image}
          />
        );
      })}
    </Carousel>
                                </div>
                            </div>
                            </div>
            </Col>
         </Row>
          
        </>
    )
}
export default Header;