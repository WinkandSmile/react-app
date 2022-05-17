import React from 'react'

import { Footer, Blog } from '../containers';

import { Nav2 } from '../components';
import './terms.css';
import '../index.css';

const Terms = () => {
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

export default Terms