import React from 'react';
import { NavLink } from 'react-router-dom';
import signpic from '../images/registration.svg';

const Signup = () => {
    return (
        <>
            <section className="signup">
                <div className="container mt-5">
                    <div className="signup-content">
                        <div className="signup-form">
                            <h2 className="form-title">Sign Up</h2>
                                <form  className="register-form" id="register-form">
                                    <div className="form-group">
                                         <label htmlFor="name">
                                         <i class="zmdi zmdi-account  material-icons-name"></i>
                                         </label>
                                         <input type="text" placeholder="Your Name" autoComplete="off" name="name" id="name"></input>
                                     </div>
                                     <div className="form-group">
                                         <label htmlFor="email">
                                         <i class="zmdi zmdi-email  material-icons-name"></i>
                                         </label>
                                         <input type="email" placeholder="Your Email" autoComplete="off" name="email" id="email"></input>
                                     </div><div className="form-group">
                                         <label htmlFor="phone">
                                         <i class="zmdi zmdi-phone-in-talk  material-icons-name"></i>
                                         </label>
                                         <input type="text" placeholder="Your Phone" autoComplete="off" name="phone" id="phone"></input>
                                     </div><div className="form-group">
                                         <label htmlFor="work">
                                         <i class="zmdi zmdi-slideshow material-icons-name"></i>
                                         </label>
                                         <input type="text" placeholder="Your Profession" autoComplete="off" name="work" id="work"></input>
                                     </div><div className="form-group">
                                         <label htmlFor="password">
                                         <i class="zmdi zmdi-lock  material-icons-name"></i>
                                         </label>
                                         <input type="password" placeholder="Your Password" autoComplete="off" name="password" id="password"></input>
                                     </div>
                                     <div className="form-group">
                                         <label htmlFor="cpassword">
                                         <i class="zmdi zmdi-lock  material-icons-name"></i>
                                         </label>
                                         <input type="password" placeholder="Confirm Password" autoComplete="off" name="cpassword" id="cpassword"></input>
                                     </div>
                                     <div className="form-group form-button">
                                         <input type="submit" name="submit" id="submit" className="form-submit" value="register" />
                                     </div>
                                </form>
                                </div>
                                <div className="signup-image">
                                    <figure>
                                        <img src={signpic} alt="Sign Up pic"></img>
                                    </figure>
                                    <NavLink to="/login" className="signup-image-link">I am already register</NavLink>
                                </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Signup