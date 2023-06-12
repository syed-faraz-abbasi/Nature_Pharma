import React from 'react';


import { Col, Row, Container} from 'react-bootstrap'
import logo22 from '../components/images/logo3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faList, faUser, faSignOutAlt,faEye } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Manage = ({ location }) => {

    return (
        <>
            <div className='dashpage'>
                <Row>
                    <Col md={2}>
                        <div className="dashboard">

                            <div className="dash">
                                <img src={logo22} alt="img" />
                            </div>
                            <div className="dash_content">
                                <ul >
                                    <li>

                                        <FontAwesomeIcon icon={faDashboard} className='fa' />

                                        Dashboard

                                    </li>

                                    <li>
                                        <Link to="/"> </Link>
                                        <FontAwesomeIcon icon={faUser} className='fa' />
                                        Manage users

                                    </li>
                                    <li> Account Setting


                                    </li>



                                    <li>

                                        <FontAwesomeIcon icon={faSignOutAlt} className='fa' />
                                        Logout

                                    </li>
                                </ul>

                            </div>
                        </div>
                    </Col>
                    <Col md={10} >
                        <div className='head'>
                            <div className="headernew">
                                <Container fluid>
                                    <Row>
                                        <h5><FontAwesomeIcon icon={faList} className='faa' />Nature Pharma</h5>
                                    </Row>
                                </Container>


                            </div>
                            
                            <div className="main-body">
                                <div className="headings">
                                    <h4>Manage Users</h4>
                                </div>
                                <div className="white-box">
                                    <div className="scrolling-table">
                                        <table className="table3">
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>Name</th>
                                                    <th>Email</th>
                                                    <th>Contact no</th>
                                                    <th>Reg. Date</th>
                                                    <th>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>1</td>
                                                    <td>Amit Kumar</td>
                                                    <td>amit.verma1@sharda.ac.in</td>
                                                    <td>8920976831</td>
                                                    <td>2019-09-24 12:44:37</td>
                                                    <td>
                                                        <a className="view-btn" href="http://example.com" title="View Details">
                                                            <FontAwesomeIcon icon={faEye} /> 
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>2</td>
                                                    <td>234324</td>
                                                    <td>amit.verma1@sharda2.ac.in</td>
                                                    <td>8920976831</td>
                                                    <td>2019-10-16 12:12:59</td>
                                                    <td>
                                                        <a className="view-btn" href="http://example.com" title="View Details">
                                                        <FontAwesomeIcon icon={faEye} />                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>3</td>
                                                    <td>Amit Verma</td>
                                                    <td>amitverma2508@gmail.com</td>
                                                    <td>8920976831</td>
                                                    <td>2019-10-17 02:42:13</td>
                                                    <td>
                                                        <a className="view-btn" href="http://example.com" title="View Details">
                                                            <FontAwesomeIcon icon={faEye} /> 
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>4</td>
                                                    <td>shahroz haider</td>
                                                    <td>shahrozhaider96@gmail.com</td>
                                                    <td>9958136534</td>
                                                    <td>2019-10-17 03:26:32</td>
                                                    <td>
                                                        <a className="view-btn" href="http://example.com" title="View Details">
                                                            <FontAwesomeIcon icon={faEye} /> 
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Col>
                </Row>
            </div>

        </>
    );
};

export default Manage;
