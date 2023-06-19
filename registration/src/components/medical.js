import React from 'react';
import {
    Col, Container, Row




} from 'reactstrap';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import Header from './header';
import Footer from './footer';
import medical from '../components/images/post2.jpg';

import 'react-slideshow-image/dist/styles.css';





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
            <div className='home-about  '>
                <Container>
                    <Row>
                    <Row>
                        <Col md={12}>
                            <div className='home-content'>

                                <p>If you are in need of kits, supportive equipment, or other items, you can get yours from our pharmacy. We offer a wide variety of medical supplies you can choose from. Rest assured that all our available items are made from durable high-end materials and have gone through multiple quality checks.</p><br />
                                <p>These are the medical supplies we have available:</p>
                                <br /> <br />
                
                            </div>
                        </Col>

                    </Row>
                    <Row>
                        <Col md={6}>
                        <List>
                                    <ListItem>
                                        <ListItemIcon>
                                            <LocalHospitalIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="First aid kits" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <LocalHospitalIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Wheelchairs" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <LocalHospitalIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Diabetic care kits" />
                                    </ListItem>
                                    <ListItem>
                                        <ListItemIcon>
                                            <LocalHospitalIcon />
                                        </ListItemIcon>
                                        <ListItemText primary="Syringes" />
                                    </ListItem>
                                </List>

                        </Col>
                        <Col md={6}>
                            <img src={medical} alt='med'/>
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