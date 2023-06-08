import React from 'react';
import { Slide } from 'react-slideshow-image';
import {
    Col, Container, NavLink,  Row, 




} from 'reactstrap';
 
import Header from './header';
import Footer from './footer';


import 'react-slideshow-image/dist/styles.css';
 



 



const Home = ({ location }) => {
     

    return (
        
        <>
        <Header/>
             <div className='slider slider-in'>
                <Container>
                    <Row>
                             <Col md={12}>
                               <h1>Contact Us</h1>
                                             
                            </Col>
                     </Row>
                </Container>
            </div>
            <div className='coming-tet'>
                <Container>
                    <Row>
                             <Col md={12}>
                             <br/><br/>
                <br/>
                 
                <h1>Coming Soon</h1>
                <br/>
                <br/>
                <br/>
                <br/><br/><br/><br/><br/><br/><br/>
                <br/>
                
                                             
                            </Col>
                     </Row>
                </Container>
            </div>
          <Footer/>
        </>


    );
};

export default Home;