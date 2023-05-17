import React, {useState} from 'react'
import './Navbar.css'
import Logo from '../Atoms/Logo';
import LoginButton from '../Atoms/Button'

import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';
export default function Navbar() {
    const [showMenu, setShowMenu] = useState(false);
    function showHamburgerMenu(){
            setShowMenu(!showMenu)
    }
    return (
        
        <div className='navbar'>
            <Logo />
            <div className='hamburger-menu'>
                <ul className={`header-list ${showMenu ? "show" : ""}`}>
                    <li><Link to={'/home'} >Home</Link></li>
                    <li><Link to={'/aboutUs'}>AboutUs</Link></li>
                    <li> <Link to={'/contact'}>Contact</Link></li>
                    <li> <Link to={'/services'}>Services</Link></li>
                    <li> <Link to={'/support'}>Support</Link></li>
                     <LoginButton  />
                </ul>
            </div>

            <FaBars className='bar-icon' onClick={showHamburgerMenu} />
            
        </div> 
    )
}
