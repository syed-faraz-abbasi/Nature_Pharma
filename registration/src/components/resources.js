import React from 'react';
import {
    Col, Container, Row




} from 'reactstrap';
import { Link } from 'react-router-dom';


import Header from './header';
import Footer from './footer';
import 'react-slideshow-image/dist/styles.css';




const Home = ({ location }) => {


    return (

        <>
            <Header />
            <div className='slider slider-in'>
                <Container>
                    <Row>
                        <Col md={12}>
                            <h1>Resources</h1>

                        </Col>
                    </Row>
                </Container>
            </div>
           
                
                <div id="main_area">
                    <div className="wrapper">
                        <main>
                            <div id="post-9" className="post-9 page type-page status-publish hentry">
                                <div className="entry-content">
                                    <div className="resources">
                                        <ul>
                                            <li>
                                                <Link className='ln' >
                                               
                                                <span >U.S. Food and Drug Administration</span>
                                           
                                                    
                                                <br/>
                                                <span className='sp'>www.fda.gov</span></Link>
                                            </li>
                                            <li>
                                                <Link className='ln' >
                                                    American Society of Health-System Pharmacists
                                                <br/>
                                                <span className='sp'>www.safemedication.com</span></Link>
                                            </li>
                                            <li>
                                                <Link className='ln' >
                                                    ConsumerMedSafety.org
                                               <br/>
                                                <span className='sp'>www.consumermedsafety.org</span> </Link>
                                            </li>
                                            <li>
                                                <Link className='ln' >
                                                    Institute for Safe Medication Practices
                                               <br/>
                                                <span className='sp'>www.ismp.org</span> </Link>
                                            </li>
                                            <li>
                                                <Link className='ln' >
                                                    Consumer Healthcare Products Association
                                               <br/>
                                                <span className='sp'>www.chpa-info.org</span> </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </main>
                        <div className="clearfix"></div>
                    </div>
                </div>
               




            <Footer />
        </>


    );
};

export default Home;