import './Footer.css'
import { FaTwitterSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { NavLink } from "react-router-dom";
export default function Footer() {
    return (
        <div>
            <footer className="footer section">
                <div className="footer__container container grid">
                    <div className="footer__content grid">
                        <div className="footer__data">
                            <h3 className="footer__title">Breedss</h3>
                            <p className="footer__description">Often times than not, when raising pets, we encounter certain problems that gets us worried,  if only there was an avenue to always ask those bugging questions on our mind.
                                Breedss is founded for this sole purpose. It has been our aim to help pet-parent share their experiences in order to help others around the world going through similar issue with their pet(s).
                               
                            </p>
                            <div>
                                <a href="https://www.fb.com" target="_blank" rel="noreferrer" className="footer__social">
                                
                                    <FaFacebookSquare />
                                </a>
                                <a href="https://www.fb.com" target="_blank" rel="noreferrer" className="footer__social">
                                    <FaTwitterSquare />
                                </a>
                                <a href="https://www.fb.com" target="_blank" rel="noreferrer" className="footer__social">
                                    <FaInstagramSquare />
                                </a>
                                <a href="https://www.fb.com" target="_blank" rel="noreferrer" className="footer__social">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>
                        <div className="footer__data">
                            <h3 className="footer__subtitle">About</h3>

                            <ul>
                                <li className="footer__item"><NavLink exact to="/about-us" className="footer__link">About Us </NavLink></li>
                                <li className="footer__item"><NavLink exact to="/accessibility" className="footer__link">Accessibility Policy </NavLink></li>
                                <li className="footer__item"><NavLink exact to="/privacy_policy" className="footer__link">
                                    Privacy Policy
                                </NavLink></li>

                            </ul>
                        </div>

                        <div className="footer__data">
                            <h3 className="footer__subtitle">Quick Links</h3>

                            <ul>
                                <li className="footer__item"><NavLink exact to="/login" className="footer__link">
                                    Login
                                </NavLink></li>
                                <li className="footer__item"><NavLink exact to="/signup" className="footer__link">
                                    Sign Up
                                </NavLink></li>

                                <li className="footer__item"><NavLink exact to="/how_to_use" className="footer__link">
                                    How To Use
                                </NavLink></li>


                            </ul>
                        </div>

                        <div className="footer__data">
                            <h3 className="footer__subtitle">Support</h3>

                            <ul>
                                <li className="footer__item">
                                    <NavLink exact to="/terms" className="footer__link">
                                        Terms and Conditions
                                    </NavLink></li>
                                <li className="footer__item"><NavLink exact to="/faqs" className="footer__link">
                                    FAQs
                                </NavLink></li>
                                <li className="footer__item">
                                    <NavLink exact to="/support" className="footer__link">
                                        Contact Support
                                    </NavLink></li>


                            </ul>
                        </div>
                    </div>

                    <div className="footer__rights">
                        <p className="footer__copy">
                            &#169; 2021 PetWebsite. All rights Reserved
                        </p>

                        <div className="footer__terms">
    
                            <NavLink exact to="/terms" className="footer__terms-link">
                            Terms and Agreements
                            </NavLink>


                            <NavLink exact to="/privacy_policy" className="footer__terms-link">
                                Privacy Policy
                            </NavLink>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
