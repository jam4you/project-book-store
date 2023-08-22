import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaSearch, FaShoppingCart, FaTwitter, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="top_header">
            <div className="container">
                <div className="social_media_icons">
                    <Link to=''><FaFacebookF /></Link>
                    <Link to=''><FaTwitter /></Link>
                    <Link to=''><FaInstagram /></Link>
                    <Link to=''><FaLinkedin /></Link>
                </div>
                <div className='profile'>
                    <Link to=''>new <span>login</span></Link>
                    <Link to=''>register</Link>
                </div>
            </div>
        </div>
        <div className="bottom_header">
            <div className="container">
                <div className="logo">
                    <h2><Link to=''>Bookly.</Link></h2>
                </div>
                <nav>
                    <ul>
                        <Link to=''>home</Link>
                        <Link to=''>about</Link>
                        <Link to=''>shop</Link>
                        <Link to=''>contact</Link>
                        <Link to=''>orders</Link>
                    </ul>
                </nav>
                <div className='icons'>
                    <Link to=''><FaSearch /></Link>
                    <Link to=''><FaUser /></Link>
                    <Link to=''><FaShoppingCart /></Link>
                    <Link to=''>(0)</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;