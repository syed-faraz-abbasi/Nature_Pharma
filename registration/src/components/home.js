import React from 'react';
import { Slide } from 'react-slideshow-image';
import {
    Col, Container, NavLink, Row,




} from 'reactstrap';
 


import 'react-slideshow-image/dist/styles.css';
import icon1 from '../components/images/icon1.png';
import userIm from '../components/images/about-1.jpeg';
import pharmacist from '../components/images/pharmacist.png';

import person from '../components/images/person.jpg';

import slidebg from '../components/images/2.png';




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
                                            <h1>Welcome to <br />Sharda Pharmacy</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Mauris laoreet ante quis faucibus commodo. Aenean pharetra arcu a augue euismod,</p>
                                            <button className='btn_p'>Read More</button>
                                            <button className='btn_b'>Know More</button>
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
                                <div className="slidein">
                                    <Container>
                                    <Row>
                                        <Col md={6}>
                                            <h1>Welcome to <br />Sharda Pharmacy</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Mauris laoreet ante quis faucibus commodo. Aenean pharetra arcu a augue euismod,</p>
                                            <button className='btn_p'>Read More</button>
                                            <button className='btn_b'>Know More</button>
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
                                <div className="slidein">
                                    <Container>
                                    <Row>
                                        <Col md={6}>
                                            <h1>Welcome to  Sharda Pharmacy</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Mauris laoreet ante quis faucibus commodo. Aenean pharetra arcu a augue euismod,</p>
                                            <button className='btn_p'>Read More</button>
                                            <button className='btn_b'>Know More</button>
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
            <section className="bandblue">
                <Container>
                    <Row>
                        <Col md={2}>
                        </Col>

                         
                        <Col md={8}> 
                            <div className="talkto-pharmasist">
                            <img src={pharmacist} alt='img' />

                            <h4>Talk to Our
                            <strong>Pharmacist</strong>
                            </h4>
                            <NavLink className='button1' href="#">View Details</NavLink>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
            <div className='home-about'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <img src={userIm} alt='img' />
                        </Col>
                        <Col md={6}>
                            <div className='home-content'>
                                <h2>Welcome to 
                                    <strong>Sharda Pharmacy </strong></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id dui sed nulla blandit blandit eu et leo. Nunc auctor volutpat libero in interdum. Maecenas quis enim lorem. Donec in felis lorem. Proin sit amet enim ante. Vivamus mollis pharetra elit, non luctus risus aliquam id. Phasellus a imperdiet enim. Morbi varius mauris non leo aliquam eleifend. Nullam at pulvinar eros. Proin ac posuere dui. Cras feugiat egestas libero, et volutpat lorem tincidunt eget. Morbi luctus, mi in congue venenatis, ex dolor ullamcorper lectus, at congue felis ipsum nec dui.
<br /> <br /> 
Curabitur nec nisl in sem scelerisque blandit id nec diam. Suspendisse placerat pellentesque mauris sed consectetur. Nullam ut justo porta, porttitor orci id, pulvinar tortor. Sed in orci vulputate, egestas enim quis, convallis libero. Praesent ultrices enim sit amet porta tempor. Sed id mauris eros. In hac habitasse platea dictumst. Curabitur fringilla dictum scelerisque.</p>
                                <NavLink className='button1' href="#">Read More </NavLink>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div className="home-services">
                <Container>
                    <Row>
                        <Col md={12}>
                            <h2>Services <strong>We Offer </strong></h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id dui sed nulla blandit blandit eu et leo. Nunc auctor volutpat libero in interdum.</p>
                        </Col>
                    </Row> 
                    <Row>
                        <Col md={3}>
                             <div className="services-in">
                                <div className="img-wrap">
                                    <img src={icon1} alt='img' className=' ' />
                                </div>
                                <div className="contant">
                                    <h4>Pharmacy </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <NavLink href='#' className='button1'>Read More</NavLink>
                                </div>
                            </div>
                         </Col>
                         <Col md={3}>
                             <div className="services-in">
                                <div className="img-wrap">
                                    <img src={icon1} alt='img' className=' ' />
                                </div>
                                <div className="contant">
                                    <h4>Pharmacy </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <NavLink href='#' className='button1'>Read More</NavLink>
                                </div>
                            </div>
                         </Col>
                         <Col md={3}>
                             <div className="services-in">
                                <div className="img-wrap">
                                    <img src={icon1} alt='img' className=' ' />
                                </div>
                                <div className="contant">
                                    <h4>Pharmacy </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <NavLink href='#' className='button1'>Read More</NavLink>
                                </div>
                            </div>
                         </Col>
                         <Col md={3}>
                             <div className="services-in">
                                <div className="img-wrap">
                                    <img src={icon1} alt='img' className=' ' />
                                </div>
                                <div className="contant">
                                    <h4>Pharmacy </h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                    <NavLink href='#' className='button1'>Read More</NavLink>
                                </div>
                            </div>
                         </Col>
                    </Row>
                </Container>
            </div>
            
            
            


        </>


    );
};

export default Home;