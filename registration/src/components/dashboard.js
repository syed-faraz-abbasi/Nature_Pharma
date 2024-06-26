import React from 'react';

import { Col, Row, Container } from 'react-bootstrap'
import logo22 from '../components/images/logo3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faList, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Admin = ({ location }) => {

    return (
        <>
            <div className='dashpage'>
                <Row>
                    <Col md={2} className='cold'>
                        <div className="dashboard">

                            <div className="dash">
                                <img src={logo22} alt="img" />
                            </div>
                            <div className="dash_content">
                                <ul >
                                    <li>
                                     <Link to="/dashboard" className='lk'>
                                    <FontAwesomeIcon icon={faDashboard} className='fa' /> 
                                        Dashboard </Link>

                                    </li>

                                    <li>
                                        <Link to="/manage" className='lk'> 
                                        <FontAwesomeIcon icon={faUser} className='fa' />
                                        Manage users</Link>

                                    </li>
                                   

                                </ul>

                            </div>
                        </div>
                    </Col>
                    <Col md={10} className='cold'>
                        <div className='head'>
                            <div className="headernew">
                                <Container fluid>
                                <Row>
                                    <h5><FontAwesomeIcon icon={faList} className='faa' />Nature Pharma</h5>
                                </Row>
                                </Container>
                                

                            </div>
                            <div className="top-dash-sec white-box">
                                <Container>
                                    <div className="row">
                                        <div className="col-md-9"  >
                                            <div className="export-div">
                                                <h3>Export Report</h3>


                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <div className="export-div">
                                                <button id="myBtn" className="button1">Export Report </button>
                                                <div className="clearfix"></div>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </div>
                        </div>


                    </Col>
                </Row>

            </div>

        </>
    );
};

export default Admin;
