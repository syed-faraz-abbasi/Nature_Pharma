import React from 'react';
import { Slide } from 'react-slideshow-image';
import {
    Col, Container, NavLink, Row,




} from 'reactstrap';
 
// import Header from './header';

import 'react-slideshow-image/dist/styles.css';
import icon1 from '../components/images/icon1.png';
import userIm from '../components/images/about-1.jpeg';
import pharmacist from '../components/images/pharmacist.png';

import person from '../components/images/person.jpg';

import slidebg from '../components/images/2.png';

import Footer from './footer';



const Home = ({ location }) => {
     

    return (
        
        <>
             <div className='slider'>
                <Container fluid>
                    <Row>
                        <Col>
                            <Slide>

                                 
                                <div className="slidein">
                                    <Container>
                                    <Row>
                                        <Col md={6}>
                                            <h1>About</h1>
                                             
                                        </Col>
                                        <Col md={6}>
                                        <div className="slider-img">
                                                <img src={person} className='img1' alt='img' />
                                                <img src={slidebg} className='img2' alt='img' />
                                            </div>  
                                        </Col>
                                    </Row>
                                    </Container>

                                </div>
                                 

                            </Slide>
                        </Col>
                    </Row>
                </Container>
            </div>
            <br/>
                <br/>
                <h1>About Coming Soon</h1>
                <br/>
                <br/>
                <br/>
                <br/><br/><br/><br/><br/><br/><br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>


            
            


        </>


    );
};

export default Home;