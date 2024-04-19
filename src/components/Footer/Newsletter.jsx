
// eslint-disable-next-line no-unused-vars
import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className='app__newsletter'>
      <div className='app__newsletter-heading'>
        <SubHeading title="NewsLetter" />
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className='p__opensans'>And never miss latest Updates!</p>
      </div>
      <div className='app__newsletter-input flex__center'>
        <input type="email" placeholder='Enter your e-mail adress' />
        <button className='custom__button'>Submit</button>
      </div>
    </div>
  )
}



export default Newsletter;
