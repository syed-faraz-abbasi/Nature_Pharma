import React from 'react';
import {
    Col, Container, Row




} from 'reactstrap';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';

import 'react-slideshow-image/dist/styles.css';
import about from '../components/images/slider_2.jpg';


import abt from '../components/images/medicine.jpg'




const Home = ({ location }) => {


    return (

        <>
            <Header />
            <div className='slider slider-in'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1>Services</h1>

                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='home-about  aboutm'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className='home-content abt'>

                                <p>The services we offer are all aimed towards the betterment of your health and overall well-being. When it comes to our customers, we see to it that the standards of our services exceed your expectations. In our pharmacy, you are valued, which is why we constantly do our best for you.</p><br/>
                                    <p>These are the services we offer:</p>
                                <br /> <br />

                            </div>
                        </Col>
                       
                    </Row>
                </Container>
            </div>
            <div className='serv_list'>
                <Container>
                    <Row>
                        <Row>
                            <Col md={4}>
                                <div className='ul '>
                                    <div className='lit'>
                                        <Link className='lk'>
                                        <img src={abt} alt="medical supplies" />
                                           <span>Pharmacy</span>
                                        </Link>
                                  
                                    </div>
                               
                                </div>
                                
                            </Col>
                            <Col md={4}>
                            <div className='ul '>
                                <div className='lit'>
                                    <Link className='lk'>
                                    <img src={about} alt="pharmacist and male customer" />
                                <span>Long-Term Care</span>
                                    </Link>
                              
                                </div>
                                
                                </div>
                            </Col>
                            <Col md={4}>
                            <div className='ul'>
                                <div className='lit'>

                                    <Link className='lk'>
                                    <img src="https://www.pennmarkpharmacy.com/wp-content/themes/pennmarkpharma/images/thumb/thumb_48146954.jpg" alt="hepatitis a vaccine vial" />
                                <span>Immunizations</span>
                                    </Link>
                                
                                </div>
                                
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4}>
                            <div className='ul lit'>
                                <div className='lit'>
                                    <Link className='lk'>
                                    <img src="https://www.pennmarkpharmacy.com/wp-content/themes/pennmarkpharma/images/thumb/thumb_72033957.jpg" alt="pharmacist at the pharmacy" />
                                <span>Medication Synchronization</span>
                                    </Link>
                               
                                </div>
                               
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className='ul'>
                                    <div className='lit'>
                                        <Link className='lk'>
                                        <img src="https://www.pennmarkpharmacy.com/wp-content/themes/pennmarkpharma/images/thumb/thumb_412382.jpg" alt="portrait of different medicine" />
                                <span>Multi-Dose Pill Packaging</span>
                                        </Link>
                                  
                                    </div>
                               
                                </div>
                               
                            </Col>
                            <Col md={4}>
                                <div className='ul'>
                                    <div className='lit'>
                                        <Link className='lk'>
                                        <img src="https://www.pennmarkpharmacy.com/wp-content/themes/pennmarkpharma/images/thumb/thumb_89046650.jpg" alt="senior pharmacist talking to a businesswoman" />
                                        <span>Medication Therapy Management</span>
                                        </Link>
                                   
                                    </div>
                        
                               
                                </div>
                               
                            </Col>
                           
                        </Row>




                    </Row>
                </Container>
            </div>


            <Footer />
        </>


    );
};

export default Home;