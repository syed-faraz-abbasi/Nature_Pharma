import React from 'react';
import { Slide } from 'react-slideshow-image';
import {
    Col, Container, Row,




} from 'reactstrap';
 
// import Header from './header';

import 'react-slideshow-image/dist/styles.css';
 

import person from '../components/images/person.jpg';

import slidebg from '../components/images/2.png';

 


const Home = ({ location }) => {
     

    return (
        
        <>
             <div className='slider slider-in'>
                <Container>
                    <Row>
                             <Col md={12}>
                               <h1>Results </h1>
                                             
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

        </>


    );
};

export default Home;