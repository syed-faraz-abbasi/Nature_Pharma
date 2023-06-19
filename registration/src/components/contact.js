import React from 'react';
import { Slide } from 'react-slideshow-image';
import {
    Col, Container, NavLink, Row,




} from 'reactstrap';

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
                            <h1>Contact Us</h1>

                        </Col>
                    </Row>
                </Container>
            </div>
            <div id="main_area">
                <div className="wrapper">

                    <main>
                        <div id="post-11" className="post-11 page type-page status-publish hentry">
                            <div className="entry-content">
                                <p>Please don't hesitate to talk to us regarding our services. A team representative will get back to you as soon as possible to answer your concern.</p>
                                <p>You may send us a direct message using the form below.</p>
                            </div>
                        </div>
                    </main>
                </div>
                <div  className="template_form">


                    <form id="submitform" name="contact" method="post" encType="multipart/form-data" action="">
                        <span className="required-info">* Required Information</span>
                        <div className="form_box1">
                            <div className="form_label">
                                <label className="text_uppercase">
                                    <strong>Full Name <span className="required_filed">*</span></strong>
                                </label>
                            </div>
                            <div className="">
                                <div className="field_holder animated_box">
                                    <input type="text" name="First_Name" className="form_field" value="" id="First_Name" placeholder="Full Name" />
                                </div>

                            </div>
                        </div>

                        <div className="form_box">


                            <label className="text_uppercase">
                                <strong>Address <span className="required_filed">*</span></strong>
                            </label>


                            <input type="text" name="Address" className="form_field" value="" id="Address" placeholder="Enter address here" />


                        </div>

                        <div className="form_box">


                            <label className="text_uppercase">
                                <strong>Email Address <span className="required_filed">*</span></strong>
                            </label>


                            <input type="text" name="Email_Address" className="form_field" value="" id="Email_Address" placeholder="Enter email address here" />


                            <label className="text_uppercase">
                                <strong>Phone <span className="required_filed">*</span></strong>
                            </label>


                            <input type="text" name="Phone" className="form_field" value="" id="Phone" placeholder="Enter phone here" onKeyPress="return isNumberKey(evt)" />

                        </div>


                        <div className="form_box">

                            <label className="text_uppercase">
                                <strong>Question / Comment <span className="required_filed"></span></strong>
                            </label>


                            <textarea name="Question_or_Comment" className="text form_field" id="Question_or_Comment" placeholder="Enter your question or comment here"></textarea>

                        </div>




                        <div className="inner_form_box2 button">
                            <input type="submit" className="button1" value="SUBMIT" />
                        </div>

                    </form>


                </div>
            </div>

            <Footer />
        </>


    );
};

export default Home;