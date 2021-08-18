import Bg_img from '../images/bg.jpg';
// import discover_rabbit from '../images/discover-rabbit.jpg';
import Button from '../Button/Button'
import { NavLink } from "react-router-dom";
import './Login.css'
import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}
export default function Login() {
    return (
        <div>
         <ScrollToTopOnMount />

            <section className="login section">
                <div className="login__container container">
                    <div className="left__side">
                        <img src={Bg_img} alt="" className="left__side-bg" />
                    </div>
                    <div className="right__side">
                        <h2 className="login__title">
                            Login to your Account
                        </h2>
                        <p className="login__description">
                        To Get Started, we’ll need your details in the form below
                        </p>
                        <div className="login__form-container">
                            <form action="" className="form">
                                <div className="form-groups">
                                    <label htmlFor="Email"></label>
                                    <input type="email" className="form-input" Placeholder="Email Address" autoComplete required />
                                </div>

                                <div className="form-groups">
                                    <label htmlFor="Password"></label>
                                    <input type="password"  className="form-input" placeholder="Password"  required/>
                                </div>

                                <div className="form-groups">
                                   <Button text="Log In"/>
                                </div>

                                <NavLink exact to="/forgot" className="login__in-link">
                                    Forgot Password?
                                </NavLink>
                            </form>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
