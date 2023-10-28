import React from 'react';
import {Link} from "react-router-dom";
import SearchImage from '../img/Search.png'
import Logo from '../img/logo.png'
import '../css/Header.css'

function Header() {
    return (
        <div className='header'>
            <div className="container">
                <div className="header__inner">

                    <img className='logo__img' src={Logo} alt="" width='50px' height='50px' />

                    <ul className='nav'>
                        <img className='nav__img' src={SearchImage} alt="" width='16px' height='16px' />
                        <li className='nav__link'><Link to='/'>Home</Link></li>
                        <li className='nav__link'><Link to='/about'>About</Link></li>
                        <li className='nav__link nav__icon-link'>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Header;