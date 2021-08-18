
import Bg_img from '../images/bg.jpg';
import Button from '../Button/Button'
import { NavLink } from "react-router-dom";

import './Signup.css'
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

export default function Signup() {
    return (
        <div>
         <ScrollToTopOnMount />

                <section className="signup section">
                    
                <div className="signup__container container">
                    <div className="left__side">
                        <img src={Bg_img} alt="" className="left__side-bg" />
                    </div>
                    <div className="right__side">
                        <h2 className="signup__title">
                            Set Up Your Account
                        </h2>
                        <p className="signup__description">
                        To Get Started, we’ll need your details in the form below
                        </p>
                        <div className="signup__form-container">
                            <form action="" className="form">
                            <div className="form-groups">
                                    <label htmlFor="Fullname"></label>
                                    <input type="email" className="form-input" Placeholder="Fullname *"  required />
                                </div>

                                <div className="form-groups">
                                    <label htmlFor="Email"></label>
                                    <input type="email" className="form-input" Placeholder="Email Address *"  required />
                                </div>

                                <div className="form-groups">
                                    <label htmlFor="Username"></label>
                                    <input type="email" className="form-input" Placeholder="Username *"   required />
                                </div>

                              

                                <div className="form-groups">
                                    <label htmlFor="Password"></label>
                                    <input type="password"  className="form-input" placeholder="Password *"  required/>
                                </div>

                                <div className="form-groups">
                                   <Button text="Sign Up"/>
                                </div>

                                <NavLink exact to="/login" className="login__in-link">
                                    Login
                                </NavLink>
                            </form>
                        </div>
                    </div>
                </div>

            
                </section>
        </div>
    )
}
