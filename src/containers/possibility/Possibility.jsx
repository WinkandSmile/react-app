import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Request contact by one of our consultants</h4>
      <h1 className="gradient__text">AI platforms<br /> for targeted Search and Selection</h1>
      <p>Artificial Intelligence technologies have been democratized.  Open AI offers natural language processing capabilities previously unheard of in the corporate tools marketplace, whilst Google AI offers an AI platform and tools for both structured and unstructured datasets allowing us search wide as well as deep, for the right candidate profiles. </p>
      <h4>Request contact by one of our consultants</h4>
    </div>
  </div>
);

export default Possibility;