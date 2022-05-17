import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Functional Skills search',
    text: 'Building deep talent pools of passive candidates, and maintaining relationships. We can rapidly source candidates with the skillsets and functional skills in industry and cross-industry to broaden your talent pools. The more we work with a client, the better the search parameters and long term results.',
  },
  {
    title: 'High achievement matching',
    text: 'Matching achievement outcome to the position requirement via AI tools. Beyond keyword search, we search for context.',
  },
  {
    title: 'Diversity and inclusion',
    text: 'Discovery of the individuals who perform the functional requirements of a role to the highest level is the core of the AI models.',
  },
  {
    title: 'New geographic markets',
    text: 'Equivalent talent and achievements are expressed differently in different cultures. Identify talent in geographic markets beyond your borders to build a deep bench of remote Work from home expertise and position your company for expansion.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Request contact by one of our consultants to Get Started</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
