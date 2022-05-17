import React from 'react';
import logo from '../../assets/talent-logo.svg';

import './navbar.css';
import { Link } from 'react-router-dom';


const Nav2 = () => {
 
    return (
      <div className="gpt3__navbar2">
        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo2">
            <img src={logo} alt='logo'/>
          </div>
          <div className="gpt3__navbar-links_container2">
            <p><Link to='/'>Home</Link></p>
            <p><Link to='../About'>About</Link></p>
            <p><Link to='../Terms'>Terms and Conditions</Link></p>
          </div>
        </div>
      </div>
      );    

   
  };
  
  export default Nav2;

