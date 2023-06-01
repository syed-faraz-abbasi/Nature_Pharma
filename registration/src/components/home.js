import React from 'react';
import { Slide } from 'react-slideshow-image';
import {
    Col, Container, Row,




} from 'reactstrap';
 


import 'react-slideshow-image/dist/styles.css';
import icon1 from '../components/images/icon1.png';
import angryimg from '../components/images/angryimg.png';
import userIm from '../components/images/Landing-Page.png';
import photo1 from '../components/images/photo1.jpg';

import person from '../components/images/person.jpg';



const Home = ({ location }) => {
     

    return (
        <>
            <div className='slider'>
                <Container fluid>
                    <Row>
                        <Col >
                            <Slide>

                                <div className="slide">
                                    <img src={angryimg} className='img1' alt='img' />
                                    <img src={person} className='img2 img3 img4' alt='img' />
                                    <h1>Welcome to <br />Sharda Pharmacy</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Mauris laoreet ante quis faucibus commodo. Aenean pharetra arcu a augue euismod,</p>
                                    <button className='btn_p'>Read More</button>
                                    <button className='btn_b'>Know More</button>
                                </div>
                                <div className="slide">

                                    <img src={angryimg} className='img1' alt='img' />
                                    <img src={person} className='img2 img3 img4' alt='img' />
                                    <h1>Welcome to <br />Sharda Pharmacy</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Mauris laoreet ante quis faucibus commodo. Aenean pharetra arcu a augue euismod,</p>
                                    <button className='btn_p'>Read More</button>
                                    <button className='btn_b'>Know More</button>

                                </div>
                                <div className="slide">
                                    <img src={angryimg} className='img1' alt='img' />
                                    <img src={person} className='img2 img3 img4' alt='img' />
                                    <h1>Welcome to <br />Sharda Pharmacy</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />Mauris laoreet ante quis faucibus commodo. Aenean pharetra arcu a augue euismod,</p>
                                    <button className='btn_p'>Read More</button>
                                    <button className='btn_b'>Know More</button>

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
                                <a className='btn' href="https://example.com">Read</a>
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
                        <Col md={3}>
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
                        </Col>
                        <Col md={3}>
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
                        </Col>
                        <Col md={3}>
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
                        </Col>
                        <Col md={3}>
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
                        </Col>

                            
                            
                            




                        </div>
                        <div className="view-wrap">


                        </div>
                    </div>
                </div>
            </div>


    <div className="why-sharda">
        <Row>
            <Col md={6}>
            <div className="image">
          
             <img src={photo1}   alt='img' />
            </div>
            </Col>
            <Col md={6}>
            <div className="sharda-conts">
                <h2>Where can I get some??</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <ul>
                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                    
                     
                </ul>
            </div>
            </Col>
        </Row>  
        
      
	</div>
   
            
            


        </>


    );
};

export default Home;