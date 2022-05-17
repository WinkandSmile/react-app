import React from 'react'

import { Footer, Blog } from '../containers';
import { Nav2 } from '../components';

import '../index.css';

const About = () => {
  return (
    <div classname= 'About'>
       <Nav2 />             
      <div className='gradient__bg'>
      <Blog />  
         <Footer />
      </div>

    </div>
  )
}

export default About

