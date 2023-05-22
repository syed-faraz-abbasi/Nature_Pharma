import React from 'react';
import { Slide } from 'react-slideshow-image';
import {
    Col, Container, Row, 
 Nav,
 List,
 ListGroupItem
 } from 'reactstrap';
import 'react-slideshow-image/dist/styles.css';
 
 import userImgh from '../components/images/ph.jpg';
 import userIm from '../components/images/photo1.jpg';
 

const Home = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
         
    ];

    return (
        <>
        <div className='slider'>
            <Container fluid>
                <Row>
                    <Col>
                        <Slide>
                            <div className="slide">
                                <img src={userImgh}  />                     
                            </div>
                            <div className="slide">
                                
                            <img src={userImgh}  />   
                                
                            </div>
                            <div className="slide">
                            <img src={userImgh}  />   
                                
                            </div>
                        
                        </Slide>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='home'>
            <Container fluid>
                <Row>
                <h1>Welcome to Sharda Pharmacy</h1>
                    <Col md={6}>
                    <img src={userIm}  />   
                    </Col>
                    <Col md={6} className='home-content'>
                          <h2>
                            Pharmacy
                          </h2>
                          <p>You and your loved ones’ health come first. With high-quality medications and supplies provided by skilled and experienced pharmacists, you can guarantee to live a healthy life within your budget.<br/> We look out for everyone in the community as if they are part of our family too.</p>
                          <a className="btn">Read More</a>
                    </Col>

                </Row>
            </Container>
        </div>
        </>
        
        
    );
};

export default Home;