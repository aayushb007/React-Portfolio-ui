import React from 'react';
import { NavLink } from 'react-router-dom';
import signpic from '../images/login.svg';

const Login = () => {
    return (
        <>
         <section className="sign-in">
                <div className="container mt-5">
                    <div className="signin-content">
                    <div className="signin-image">
                                    <figure>
                                        <img src={signpic} alt="Sign Up pic"></img>
                                    </figure>
                                    <NavLink to="/signup" className="signup-image-link">Create an Account</NavLink>
                                </div>
                      
                        <div className="signin-form">
                            <h2 className="form-title">Sign Up</h2>
                                <form  className="register-form" id="register-form">
                                   
                                     <div className="form-group">
                                         <label htmlFor="email">
                                         <i class="zmdi zmdi-email  material-icons-name"></i>
                                         </label>
                                         <input type="email" placeholder="Your Email" autoComplete="off" name="email" id="email"></input>
                                    </div> <div className="form-group">
                                         <label htmlFor="password">
                                         <i class="zmdi zmdi-lock  material-icons-name"></i>
                                         </label>
                                         <input type="password" placeholder="Your Password" autoComplete="off" name="password" id="password"></input>
                                     </div>
                                     <div className="form-group form-button">
                                         <input type="submit" name="submit" id="submit" className="form-submit" value="Login" />
                                     </div>
                                </form>
                                </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login