import React from 'react';

import { Col,Row,Container } from 'react-bootstrap'
import logo22 from '../components/images/logo3.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDashboard,faList,   faUser,faSignOutAlt} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
const Admin = ({ location }) => {
    
    return (
        <>   
            <div className='dashpage'>
                <Row>
                    <Col md={3}>
                                <div className="dashboard">
                                
                                <div className="dash">
                                    <img src={logo22} alt="img" />
                                </div>
                                <div className="dash_content">
                                    <ul className="widget widget-menu unstyled">
                                        <li>
                
                                            <FontAwesomeIcon icon={faDashboard} className='fa' />
                
                                            Dashboard
                
                                        </li>
                                        
                                        <li>
                                            <Link to="/"> </Link>
                                            <FontAwesomeIcon icon={faUser}  className='fa'/>
                                            Manage users
                
                                        </li>
                                    </ul>
                                    
                                    <ul className="widget widget-menu unstyled">
                                        
                                    </ul>
                                    <ul className="widget widget-menu unstyled">
                                        <li> Account Setting
                                        
                                            
                                        </li>
                                    </ul>
                                    <ul className="widget widget-menu unstyled">
                                        
                                        <li>
                                            
                                            <FontAwesomeIcon icon={faSignOutAlt} />
                                            Logout
                
                                        </li>
                                    </ul>
                
                                </div>
                            </div>
                    </Col>
                    <Col md={9}>
                            <div className="headernew">
                                <Row>
                                <h5><FontAwesomeIcon icon={faList} className='faa'/>Nature Pharma</h5>
                                </Row>	 
                                                                     
                            </div>
                    </Col>
                </Row>
              
            </div>
        
        </>
    );
};

export default Admin;
