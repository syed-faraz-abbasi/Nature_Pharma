import React from 'react';
 import {
    Col, Container,   Row,




} from 'reactstrap';
import Header from './header';
import Footer from './footer';
 
 
import 'react-slideshow-image/dist/styles.css';
import about from '../components/images/photo1.jpg';
 

 import abt from '../components/images/about.jpg'
 
 


const Home = ({ location }) => {
     

    return (
        
        <>
         <Header/>
               <div className='slider slider-in'>
                <Container>
                    <Row>
                             <Col md={12}>
                               <h1>About Us</h1>
                                             
                            </Col>
                     </Row>
                </Container>
               </div>
            <div className='home-about  aboutm'>
                <Container>
                    <Row>
                             <Col md={6}>
                             <div className='home-content abt'>
                                <h2>
                                    <strong>Mission</strong></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id dui sed nulla blandit blandit eu et leo. Nunc auctor volutpat libero in interdum. Maecenas quis enim lorem. Donec in felis lorem. Proin sit amet enim ante. Vivamus mollis pharetra elit, non luctus risus aliquam id. Phasellus a imperdiet enim. Morbi varius mauris non leo aliquam eleifend. Nullam at pulvinar eros. Proin ac posuere dui. Cras feugiat egestas libero, et volutpat lorem tincidunt eget. Morbi luctus, mi in congue venenatis, ex dolor ullamcorper lectus, at congue felis ipsum nec dui.</p>
                                <br /> <br /> 
                            </div>
                             </Col>
                             <Col md={6}>
                               <img src={about} alt='ab'/>
                             </Col>
                     </Row>
                </Container>
            </div>
            <div className='home-about aboutm  fol2'>
                <Container>
                    <Row>
                        <Col md={6}>
                            <img src={abt} alt='90'/>
                        </Col>
                             <Col md={6}>
                             <div className='home-content abt fold2'>
                                <h2><strong>Who We Are</strong></h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam id dui sed nulla blandit blandit eu et leo. Nunc auctor volutpat libero in interdum. Maecenas quis enim lorem. Donec in felis lorem. Proin sit amet enim ante. Vivamus mollis pharetra elit, non luctus risus aliquam id. Phasellus a imperdiet enim. Morbi varius mauris non leo aliquam eleifend. Nullam at pulvinar eros. Proin ac posuere dui. Cras feugiat egestas libero, et volutpat lorem tincidunt eget. Morbi luctus, mi in congue venenatis, ex dolor ullamcorper lectus, at congue felis ipsum nec dui.</p>
                                <br /> <br /> 
                            </div>
                             </Col>
                             
                     </Row>
                </Container>
            </div>
            

           <Footer/>
        </>


    );
};

export default Home;