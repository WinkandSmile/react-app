import React from 'react';
import Feature from '../../components/feature/Feature';
import './whattalentasso.css';
import { Link } from 'react-router-dom';

const Whattalentasso = () => (
  <div className="gpt3__whatgpt3 section__margin" id="whattalentasso">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Talent Associates" text="Before all else Talent Associates are Search and Selection professionals. Identifying, qualifying and placing talent with dynamic clients offering accelerated career paths is our core mission. We've developed tools to widen our breadth then narrowcast to our targets, to attract passive candidates and match them with the best fit client requirements. AI technologies are a tool we weild in our processes applied by the Human Intelligence of our Talent Acquisition specialist team." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Expand your talent demographics. Speed your time to hire</h1>
      <p><Link to='../About'>About Talent Associates</Link></p>
      <p><Link to='../Terms'>Explore the placement fee structure</Link></p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Talent Requirements" text="Obtaining detailed functional skill requirements along with hard and soft background guidance from the direct line manager input is key - we can't find the ideal people for your positions, without a laser-sharp profile of who to look for." />
      <Feature title="Talent pools" text="Building comprehensive and evolving talent profiles beyond the resume. Matching functions, environment and vertical, candidates within your industry and where appropriate, cross-functional talent from outside." />
      <Feature title="Relationships" text="Providing candidate value beyond the position search, maintaining regular contact and providing them candidate tools for IDing their top target company for their next role as well as a personal skills development plan to accelerate their personal career path." />
    </div>
  </div>
);

export default Whattalentasso;

