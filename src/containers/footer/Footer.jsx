import React from 'react';
import gpt3Logo from '../../assets/talent-logo.svg';
import './footer.css';
import { Link } from 'react-router-dom';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

    <div className="gpt3__footer-btn">
      <p>Request tech guide</p>
    </div>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p> AI sourced, human qualified: US and international Search and Selection, <br /> All Rights Reserved</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Links</h4>
        <p><Link to='./About'>About</Link></p>
        <p>Path Partners</p>
        <p>The HR Director</p>
        <p>Society for Human Resource Management</p>        
        <p></p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Company</h4>
        <p><Link to='./Terms'>Terms & Conditions</Link></p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <p>New York, NY</p>
        <p>+1 212 353 8049</p>
        <p>info@talent-associates.com</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2021 Talent Associates. All rights reserved.</p>
    </div>
  </div>
);

export default Footer;
