
import React, { useState } from 'react';
import { NavLink } from "react-router-dom";
import './Header.css';
import { BiMenuAltLeft } from 'react-icons/bi';
import { FaTimes } from 'react-icons/fa';
import { MdPets } from 'react-icons/md';





export default function Header() {

    const [click, setClick] = useState(false);

    function openNav() {
        setClick((click)=>!click)
      
      
    }
   
    return (
        <div>
            <header className="header" id="header">
                <nav className="nav container">
                    <NavLink className="nav__logo" exact to="/"><MdPets/> Breedss</NavLink>

                    {/* <div className="nav__menu" id="nav-menu"> */}
                   
                    <div className= {click ? 'show-menu' : 'nav__menu'} id="nav-menu">
                        <ul className="nav__list">
                            <li className="nav__items">
                                <NavLink exact to="/home" onClick={openNav} className="nav__link">Homepage</NavLink>

                            </li>
                            <li className="nav__items">
                                <NavLink exact to="/about-us" onClick={openNav} className="nav__link">
                                    About Us
                                </NavLink>

                            </li>
                            
                            <li className="nav__items">
                                <NavLink exact to="/social" onClick={openNav} className="nav__link">
                                    Pet Social
                                </NavLink>
                            </li>
                            <li className="nav__items">
                                <NavLink exact to="/login" onClick={openNav} className="nav__link login__link">
                                    Login
                                </NavLink>

                            </li>
                            <li className="nav__items">
                                <NavLink exact to="/signup" onClick={openNav} className="nav__link signup__link">
                                    Sign Up
                                </NavLink>
                            </li>
                        </ul>
                       
                    </div>
                  
                   
                    {click ? <FaTimes className='nav__tog' onClick={openNav}/> : <BiMenuAltLeft className='nav__toggle' onClick={openNav}/>}
                      
                   
                </nav>
            </header>
        </div>
    )
}
