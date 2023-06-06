import React from 'react';
 



 




const Admin = ({ location }) => {


    return (

        <>
       
                

                    <div id="login-page">
                        <div className="login-new">
                            <div className="login-left">
                                <div className="logo">
                                    <a href="http://13.126.253.70/grievance/"><img src="http://13.126.253.70/grievance/assets/imgs/logo22.png" alt="logo" /></a>
                                    <h3>Grievance Redressal Online Portal </h3>
                                </div>

                                <ul className="login-num">
                                    <li>
                                        <div className="icon">1</div>
                                        <h5>Register Your self</h5>
                                    </li>
                                    <li>
                                        <div className="icon">2</div>
                                        <h5>Add Your complaint</h5>
                                    </li>
                                    <li>
                                        <div className="icon">3</div>
                                        <h5>Track your Grievance Live Status</h5>
                                    </li>
                                </ul>

                                <div className="contact">
                                    <h5>Get more information contact us at</h5>
                                    <div className="clearfix"></div>
                                    <a href="tel:0000-000000<"><i className="fa fa-phone-square" aria-hidden="true"></i> 0000-000000</a>
                                    <a href="mailto:grievance@sharda.ac.in"><i className="fa fa-envelope" aria-hidden="true"></i> grievance@sharda.ac.in </a>
                                </div>
                            </div>
                            <div className="login-right">
                                <div className="login-right-in">
                                    <div className="logo">

                                        <h4>Admin Login</h4>
                                    </div>





                                    <form className="form-vertical" method="post">


                                        <div className="login-sec">

                                            <div className="login-group">
                                                <input className="span12" type="text" id="inputEmail" name="username" placeholder="Username" required />

                                            </div>
                                            <div className="login-group">
                                                <input className="span12" type="password" id="inputPassword" name="password" placeholder="Password" required />

                                            </div>


                                            <div className="clearfix"></div>
                                            <button className="button1" onclick="return doSubmit();" name="submit" type="submit" value="Submit"><i className="fa fa-lock"></i> SIGN IN</button>
                                            <div className="clearfix"></div>
                                            <p className="registration1">
                                                <a href="http://13.126.253.70/grievance/adminlogin/forgotpassword"> Forgot Password?</a>
                                            </p>
                                            <p className="registration2">
                                                <a href="http://13.126.253.70/grievance/userlogin"> User Login </a>
                                            </p>

                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
             
 

          






        </>


    );
};

export default Admin;