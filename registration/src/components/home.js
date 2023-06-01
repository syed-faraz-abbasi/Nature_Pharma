import React from 'react';
import { Slide } from 'react-slideshow-image';
import {
    Col, Container, Row,




} from 'reactstrap';
 


import 'react-slideshow-image/dist/styles.css';
import icon1 from '../components/images/icon1.png';
import angryimg from '../components/images/angryimg.png';
import userIm from '../components/images/Landing-Page.png';
import testimonial from '../components/images/testimonial.jpg';


import person from '../components/images/person.jpg';



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
                                            <img src={person} className='img4' alt='img' />
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
                                            <img src={person} className='img4' alt='img' />
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
                                            <img src={person} className='img4' alt='img' />
                                        </Col>
                                    </Row>
                                    </Container>
                                </div>

                            </Slide>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className='home-about'>
                <Container>
                    <Row>

                        <Col md={6}>
                            <img src={userIm} alt='img' />
                        </Col>
                        <Col md={6} >
                            <div className='home-content'>
                                <h1>Welcome to Sharda Pharmacy</h1>
                                <p>You and your loved ones’ health come first. With high-quality medications and supplies provided by skilled and experienced pharmacists, you can guarantee to live a healthy life within your budget. </p>
                                <a href="https://example.com">Link</a>
                            </div>
                        </Col>

                    </Row>
                </Container>
            </div>

            <div className="center-excellence">
                <div className="container">
                    <div className="row">
                        <div className="hedings col-md-12">
                            <h3 className="text-center pb-3">Services We Offer</h3>
                        </div>
                        <div className="centerofexcellence-slider arrowsldier">


                            <div className="ce-item">
                                <div className="global">

                                    <div className="img-wrap">
                                        <img src={icon1} alt='img' className=' ' />
                                    </div>
                                    <div className="head-wrap">
                                        <h4>Institute of Dental Sciences</h4>
                                    </div>

                                </div>
                            </div>
                            <div className="ce-item">
                                <div className="global">

                                    <div className="img-wrap">
                                        <img src={icon1} className=' ' alt='img' />
                                    </div>
                                    <div className="head-wrap">
                                        <h4>Institute of Orthopedic & Spine</h4>
                                    </div>

                                </div>
                            </div>
                            <div className="ce-item">
                                <div className="global">

                                    <div className="img-wrap">
                                        <img src={icon1} className=' ' alt='img' />
                                    </div>
                                    <div className="head-wrap">
                                        <h4>Institute of Neuro Sciences</h4>
                                    </div>

                                </div>
                            </div>
                            <div className="ce-item">
                                <div className="global">

                                    <div className="img-wrap">
                                        <img src={icon1} className=' ' alt='img' />
                                    </div>
                                    <div className="head-wrap">
                                        <h4>Institute of Renal Sciences & Transplant</h4>
                                    </div>

                                </div>
                            </div>
                            <div className="ce-item">
                                <div className="global">

                                    <div className="img-wrap">
                                        <img src={icon1} className=' ' alt='img' />
                                    </div>
                                    <div className="head-wrap">
                                        <h4>Institute of Oncology </h4>
                                    </div>

                                </div>
                            </div>
                            <div className="ce-item">
                                <div className="global">

                                    <div className="img-wrap">
                                        <img src={icon1} className=' ' alt='img' />
                                    </div>
                                    <div className="head-wrap">
                                        <h4>Institute of Critical Care</h4>
                                    </div>

                                </div>
                            </div>
                            <div className="ce-item">
                                <div className="global">

                                    <div className="img-wrap">
                                        <img src={icon1} className=' ' alt='img' />
                                    </div>
                                    <div className="head-wrap">
                                        <h4>Institute of Heart </h4>
                                    </div>

                                </div>
                            </div>





                        </div>
                        <div className="view-wrap">


                        </div>
                    </div>
                </div>
            </div>
            <div className='home-about fold3'>
                {/* <Container> */}
                    <Row>

                        <Col md={5}>
                            <img src={testimonial} className='testimonial' alt='img' />
                        </Col>
                        <Col md={7} >
                            <div className='home-test'>

                                <p>“We choose to specialise in Avada <br />
                                    because it is both functional and <br />
                                    practical, and  our clients simply love it! It has stood the test of time and <br />
                                    continues to evolve – an excellent <br />
                                    solution for our talented design team, <br />
                                    who continue to push the boundaries.” </p>

                            </div>
                        </Col>

                    </Row>
                {/* </Container> */}
                


            </div>
            
            


        </>


    );
};

export default Home;