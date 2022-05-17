import React from 'react';
import { google, openai, atlassian, linkedin, greenhouse, hubspot, convertkit } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} alt='google' />
    </div>
    <div>
      <img src={openai} alt='openai'/>
    </div>
    <div>
      <img src={atlassian} alt='atlassian'/>
    </div>
    <div>
      <img src={linkedin} alt='linkedin'/>
    </div>
    <div>
      <img src={greenhouse} alt='greenhouse'/>
    </div>
    <div>
      <img src={hubspot} alt='hubspot'/>
    </div>
    <div>
      <img src={convertkit} alt='convertkit'/>
    </div>
  </div>
);

export default Brand;
